const FileActions = require('../actions/fileActions');
const FileRepository = require('../repositories/fileRepository');
const SUCCESS_READ_AND_WRITE = 'done';
const READ_ERROR_TEXT = 'Не удалось получить текст...';
const WRITE_ERROR_TEXT = 'Не удалось записать текст...';
const SUCCESS_STATUS = 200;
const ERROR_STATUS = 520;

class FileService {
  postFile(req, res) {
    FileActions.createFile(req.body.text)
      .then((response) => {
        if(response !== SUCCESS_READ_AND_WRITE) {
          res.status(ERROR_STATUS).send(WRITE_ERROR_TEXT)
        } else {
          res.status(SUCCESS_STATUS).json(response)
        }
      })
      .catch(error => {
        res.status(SUCCESS_STATUS).send(error)
      })
  }

  getFile(req, res) {
    FileRepository.readFile()
      .then((response) => {
        res.status(SUCCESS_STATUS).json({
          data: {
            text: response
          }
        })
      })
      .catch(() => {
        res.status(ERROR_STATUS).send(READ_ERROR_TEXT)
      })
  }
}

module.exports = new FileService();

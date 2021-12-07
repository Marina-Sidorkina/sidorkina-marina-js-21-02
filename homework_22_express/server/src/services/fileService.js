const FileActions = require('../actions/fileActions')

class FileService {
  postFile(req, res) {
    FileActions.createFile(req.body.text)
      .then((response) => {
        if(response !== 'done') {
          res.status(520).send('Не удалось записать текст...')
        } else {
          res.status(200).send(response)
        }
      })
      .catch(error => {
        res.status(520).send(error)
      })
  }
}

module.exports = new FileService();

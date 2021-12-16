const fs = require('fs');

class FileRepository {
  readFile() {
    return new Promise((res, rej) => {
      fs.readFile(
        './src/files/file.txt',
        'utf8',
        (error, data) => {
          if(error) {
            rej(error);
          } else {
            res(data)
          }
        })
    });
  }
}

module.exports = new FileRepository();

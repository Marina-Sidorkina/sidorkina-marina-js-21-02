const fs = require('fs');

class FileActions {
  createFile(text) {
    return new Promise((res, rej) => {
      fs.writeFile(
        './src/files/file.txt',
        text,
        'utf8',
        (error) => {
          if(error) {
            rej(error);
          } else {
            res("done")
          }
        })
    });
  }
}

module.exports = new FileActions();

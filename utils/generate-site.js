const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

const copyFile = fileResponse => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./dist/index.html', fileResponse, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
  });
};

module.exports = { writeFile, copyFile };
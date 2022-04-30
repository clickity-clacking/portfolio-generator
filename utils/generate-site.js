const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if error, reject Promise and send error to Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of function here to make sure Promise doesn't execute resolve() function as well
          return;
        }
  
        // if worked ok, resolve Promise and send  successful data to  `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

const copyfile => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                // return out of function here to make sure Promise doesn't execute resolve() function as well
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    })
};

//shorthand property names. So if we have a property key name with the same name as the value we're associating with it, like writeFile: writeFile, we can just say writeFile
module.exports = { writeFile, copyFile };
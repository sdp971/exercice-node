let fs = require('fs');
const path = require('path');
let array = [];
  let fileCount = 0;


function readFilesInDirectory(directory,callback) {
    const directoryPath = path.join(__dirname, directory);
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        console.log(err);
      } else {
        fileCount = files.length;

        files.forEach(function (file) {
          let filePath = path.join(directoryPath, file);
          fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
              console.log(err);
            } else {
              array.push(data);
              fileCount--;

              if (fileCount === 0) {
                console.log("je rentre")
                callback(array);
              }
            }
          });
        });
      }
    });

}
  
readFilesInDirectory("books", (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
});


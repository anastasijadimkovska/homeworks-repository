const fs = require("fs"); 
const path = require("path");
const newPath = path.join(__dirname, "index.js");
const filePath = path.join(__dirname, "homework.txt");

fs.writeFile(filePath, 'Homework 02 in Basic Node', function (err) {
    if (err){throw new Error('File not saved')};
    console.log('File saved');
  });
  fs.appendFile(filePath, ' FINISHED!', function (err) {
    if (err) {throw new Error('File not updated')};
    console.log('File updated');
  });
  
  
  fs.readFile(filePath, { encoding: "utf-8" }, (err,data) => {
      if (err) throw new Error("Something went wrong while reading file");
        console.log(`This is the file content:  ${data}`);
    });


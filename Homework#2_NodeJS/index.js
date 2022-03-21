const fs = require("fs"); 
const path = require("path");
const newPath = path.join(__dirname, "index.js");
const filePath = path.join(__dirname, "homework.txt");

fs.writeFileSync(filePath, 'Homework 02 in Basic Node',);
fs.appendFileSync(filePath, ' FINISHED!'); 
  
 const data =  fs.readFileSync(filePath, { encoding: "utf-8" });
    console.log(`This is the file content:  ${data}`)
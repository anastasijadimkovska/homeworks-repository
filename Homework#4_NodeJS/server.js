const http = require("http");
const fs = require("fs");
const path = require("path");
const studentPath = path.join(__dirname, "logs.txt");
const emitter = require('./logger/logger')


const server = http.createServer((request, response) => { 
    const url = request.url;
    const method = request.method;  
    emitter.emit('request');
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, PUT, OPTIONS"
    );
    emitter.emit("request");
    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write(`<h1>Hello Welcome to My Server</h1>`);
        return response.end();
      }
      if (url === '/students' && method === 'GET') {
        response.setHeader('Content-Type", "text/html');
        response.write('<h1>hello students</h1>')
        const studentData = fs.readFileSync(studentPath,  { encoding: "utf-8" });
        return response.end(studentData);
      }
      if (url ==='/students' && method === 'POST') {
         const chunksReceived = [];
        request.on("data", chunk => {
          console.log(chunk);
          chunksReceived.push(chunk);
        });
        request.on("end", () => {
          const parsedData = Buffer.concat(chunksReceived).toString();    
          const studentsData = fs.readFileSync(studentPath, { encoding: "utf-8" });
          const parsedstudentsData = JSON.parse(studentsData);
    
          const parsedJsonstudent = JSON.parse(parsedData);
          console.log(parsedJsonstudent);
          parsedstudentsData.students.push(parsedJsonstudent);
    
          const stingifiedstudentsToBeSaved = JSON.stringify(parsedstudentsData);
            emitter.emit("student-added");
            emitter.emit('student-name-logged');
            fs.writeFileSync(studentsPath, stingifiedstudentsToBeSaved, {
            encoding: "utf-8",
          });
        });
        
        return response.end();
      }
      else {  
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      }
})

server.listen(3000, "localhost", () => {
  emitter.emit('server-started')
  });
  
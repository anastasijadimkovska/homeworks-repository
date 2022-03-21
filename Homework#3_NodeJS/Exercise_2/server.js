const http = require("http");
const fs = require('fs');
const path = require("path");
const { buffer } = require("stream/consumers");
const newPath = path.join(__dirname, "students.txt");
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  if (url === "/") {
    response.setHeader("Content-type", "text/html");
    response.write(`<h1>Hi it's my second server!</h1>`);
    return response.end();
  } if (url === "/all_students") {
    response.setHeader("Content-type", "text/html");
    response.write("<h1>We are at all students route</h1>");
    const chunksArr = []
    request.on('data', (chunk) => {
      chunksArr.push(chunk);
    });
    request.on('end', () => {
      const parsedData = Buffer.concat(chunksArr).toString()
      fs.writeFileSync(newPath, parsedData, {encoding: "utf-8",
    }) 
   
    })
  return response.end();
  }
  if (url === "/add_student") {
    response.setHeader("Content-type", "text/html");
    response.write(`<form action="/all_students" method="post">
    <input type="text" name='student'>
    <button>Submit</button>
    </form>`);
    return response.end();
  }
})

server.listen(3000, "localhost", () => {
  console.log(`Server is up and running, on port ${3000}`);
});
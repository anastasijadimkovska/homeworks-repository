const http = require("http");
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
    if (url === "/") {
        response.setHeader("Content-type", "text/html");
        response.write(`<h1>Hi it's my first server</h1>`);
        return response.end();
 } if (url === "/student") {
    response.setHeader("Content-type", "text/html");
    response.write(`<ul>
    <li>Student name: Anastasija</li>
    <li>Student lastname: Dimkovska</li>
    <li>Academy: SEDC</li>
    <li>Subject: NodeJS</li>
</ul>`);
    return response.end();
  }
 })

 server.listen(3000, "localhost", () => {
  console.log(`Server is up and running, on port ${3000}`);
});

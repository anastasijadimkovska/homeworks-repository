const fs = require ('fs');
const path = require ('path');
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {};
const emitter = new MyEmitter();

const statsPath = path.join(__dirname, 'stats.json');
const statsData = JSON.parse(fs.readFileSync(statsPath, {encoding:'utf-8'}));

emitter.on('request', () => {
    statsData.numberOfRequests += 1;
    fs.writeFileSync(statsPath, JSON.stringify(statsData));
}).on('student-added', () => {
statsData.numberOfStudents += 1;
fs.writeFileSync(statsPath, JSON.stringify(statsData));
}).on('student-name-logged', () => {
    statsData.studentNames.push(statsData);
    fs.writeFileSync(statsPath, JSON.stringify(statsData));
});
emitter.once('server-started', () => {
    console.log(`Server is up and running`)
  })

module.exports = emitter;
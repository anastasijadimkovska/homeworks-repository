const express = require("express");
const fs = require('fs');
const app = express();
const bodyParser = require("body-parser");
const path = require('path')
const newPath = path.join(__dirname, "students.txt");
app.use((req, res, next) => {
    console.log("We are at middleware");
    next();
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my server!</h1>`)
});
app.get('/all_students' , (req, res) => {
    res.send("<h1>We are at all students route</h1>")
})
app.post('/all_students' , (req, res) => {
    const studentName = req.body.student 
    console.log("Student name is:", studentName);
    fs.writeFile(newPath, studentName, err => {
        if (err) {
            console.log('error msg' + errS);
            return
        }
    }) 
     res.redirect("/");
})
app.get('/add_student', (req, res) => {
    res.send(`<form action="/all_students" method="post">
    <input type="text" name='student'>
    <button>Submit</button>
    </form>`); 
})

// app.post('/add_student', (req, res) => {
//     console.log('this student is'+studentName)
// //     fs.writeFileSync(newPath, req.body.student, {encoding: "utf-8",
// // }) 
// })

app.get("*", (req, res) => {
    res.status(404).send({ err: "PAGE NOT FOUND" });
  });
app.listen(3000, 'localhost', () => {
    console.log('Server is up and running on port 3000')
})
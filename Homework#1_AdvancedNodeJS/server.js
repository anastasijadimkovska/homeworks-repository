const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const watchListPath = path.join(__dirname, './watchList.json')
// class Movie {
//     constructor(props) {
//         this.movieName = props.movieName;
//         this.movieGenre = props.movieGenre;
//         this.movieReleaseDate = props.movieReleaseDate;
//         this.movieDirector = props.movieDirector
//     }
// }

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello Everyone!')
})
app.get('/watch_list' , (req, res) => {
    res.send(JSON.parse(fs.readFileSync(watchListPath, { encoding: "utf-8" })
  ))})
  
app.post('/add_to_watch_list', (req, res) => {
 const receivedMovie = req.body;
 const readDB =JSON.parse(fs.readFileSync(watchListPath, { encoding: "utf-8" }))
 readDB.push(receivedMovie);
 fs.writeFileSync(watchListPath, JSON.stringify(readDB));
 })
app.get("*", (req, res) => {
      res.send("<h1>Route Not Found</h1>");
    
  });
  

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

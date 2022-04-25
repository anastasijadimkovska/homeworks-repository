const trainerRouter = require("./trainers.routes");
const express = require('express');
const path = require("path");
const app = express();
app.use(express.json());
const publicPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
app.use("/static-page", express.static(publicPath));
app.use("/api", trainerRouter);
app.use('/home/imageName.jpg', express.static(publicPath));
app.listen(PORT, HOST, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
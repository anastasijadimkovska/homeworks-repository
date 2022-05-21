const express = require ('express');
const app = express();
const hotelRoutes = require('./routes/hotel-routes');
const motelRoutes = require('./routes/motel-routes');
app.use(express.json());
app.use('/hotels', hotelRoutes);
app.use('/motels', motelRoutes);

app.listen(
    console.log('Server is up and running on port 3000')
)
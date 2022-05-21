const HotelsModel = require("../models/hotels-model");
const hotelsModel = new HotelsModel();

class HotelsController {
  getHotels() {
    console.log("2. We are at controller and we are about to call the model");
   
    const hotels = hotelsModel.getHotels();

    return hotels;
  }
  postHotels() {
      const newHotel = hotelsModel.postHotels();
      return newHotel;
  }
}

module.exports = HotelsController;
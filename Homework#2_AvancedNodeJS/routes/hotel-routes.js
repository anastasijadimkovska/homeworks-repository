const router = require("express").Router();

const HotelsController = require("../controller/hotels-controller");
const hotelsController = new HotelsController();

router.get("/", (req, res) => {

  console.log(
    "1. We are at HOTELS route and we are about to call the controller =)"
  );
  const hotels = hotelsController.getHotels();

  res.send(hotels);
});
router.post('/add_hotel', (req, res) => {
    const hotels = req.body;
    const newHotel = hotelsController.postHotels(hotels)
        res.send(newHotel)
})
module.exports = router;
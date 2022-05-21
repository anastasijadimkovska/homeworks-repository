const router = require('express').Router();

const MotelsController = require('../controller/motels-controller');
const motelsController = new MotelsController;

router.get("/", (req, res) => {
    const motels = motelsController.getMotels();
    res.send(motels);
})
router.post('/add_motel', (req, res) => {
    const motels = req.body;
    const newMotel = motelsController.postMotels(motels)
        res.send(newMotel)
})
module.exports = router;
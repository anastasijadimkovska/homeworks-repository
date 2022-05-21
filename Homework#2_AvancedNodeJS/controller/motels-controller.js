const MotelsModel = require('../models/motels-model');
const motelsModel = new MotelsModel();

class MotelsController {
    getMotels(){
        const motels = motelsModel.getMotels();
        return motels;
    }
    postHotels() {
        const newMotel = motelsModel.postMotels();
        return newMotel;
    }
}
module.exports = MotelsController;
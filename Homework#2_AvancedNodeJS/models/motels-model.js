const path = require('path');
const { readFile, writeFile } = require("../utils/file-service");

const MOTELS_PATH = path.join("..", "db", "motels.json");

class MotelsModel {
    getMotels() {
        const motels = readFile(MOTELS_PATH);
        
        return motels;
    }
    postHotels(motel) {
        const newMotel = writeFile(MOTELS_PATH, motel);
        return motels;
    }
}
module.exports = MotelsModel;
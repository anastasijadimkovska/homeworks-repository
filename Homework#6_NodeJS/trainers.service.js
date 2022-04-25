const fs = require("fs");
const path = require("path");
const trainerPath = path.join(__dirname, 'trainers.json');
const { v4: uuid } = require("uuid");

const getTrainersData = (queryData) => {
  const trainers = JSON.parse(
    fs.readFileSync(trainersPath, { encoding: "utf-8" })
  );

  let updatedTrainers = [...trainers];

   
if (queryData?.isCurrentlyTeaching) {
  updatedTrainers = updatedTrainers.filter(
    (trainer) => trainer.isCurrentlyTeaching === queryData.isCurrentlyTeaching
  );
//  const sortedArr = queryData.sort((a,b) => a-b)

 updatedTrainers.sort
  if (updatedTrainers.length <= 0) throw new Error("No Trainers found");

  return updatedTrainers;
};}
const saveTrainerData = (trainers) =>
  fs.writeFileSync(trainersPath, JSON.stringify(trainers, 0, 2));

  const addTrainer = (newTrainerData) => {
    const Trainers = getTrainersData();
    const newTrainer = {
      id: uuid(),
      ...newTrainerData,
    };
    const updatedTrainers = [...Trainers, newTrainer];
    saveTrainerData(updatedTrainers);
    return newTrainer;
  };
  const getTrainerById = (TrainerId) => {
    const Trainers = getTrainersData();
  
    const trainerFound = Trainers.find((Trainer) => Trainer.id === TrainerId);
  
    if (!trainerFound) throw new Error("Trainer not found");
  
    return trainerFound;
  };
  const updateTrainer = (trainerId, trainerUpdateData) => {
    if (trainerUpdateData.id) throw new Error("Id cannot be changed");
  
    const trainers = getTrainersData();
    const foundTrainerId = trainers.findId(
      (trainer) => trainer.id === trainerId
    );
    if (foundTrainerId < 0) throw new Error("Trainer not found");
  
    const updatedTrainerData = {
      ...trainers[foundTrainerId],
      ...trainerUpdateData,
      
    };
  
    trainers[foundTrainerId] = updatedTrainerData;
  
    saveTrainerData(trainers);
    return updatedTrainerData;
  };
  const deleteTrainer = (trainerId) => {
    const trainers = getTrainersData();
  
    const updatedTrainerData = trainers.filter(
      (trainer) => trainer.id !== trainerId
    );
  
    saveTrainerData(updatedTrainerData);
  };
  const deleteAll = (trainers) => {
    const trainers = getTrainersData();
    // trainers.forEach(trainer => {
    //   deleteTrainer(trainerId)
    // })
      const updatedTrainerData = trainers.filter(
      (trainer) => !trainer
    );
    saveTrainerData(updatedTrainerData);
  }
module.exports = {
  getTrainersData,
  getTrainerById,
  addTrainer,
  updateTrainer,
  deleteTrainer,
  deleteAll
};
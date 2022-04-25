
const router = require("express").Router();
const trainerService = require("./trainers.service");
//get all trainers
router.get("/trainers", (req, res) => {
    const data = req.query;
    console.log(data);
  
    try {
      const trainer = trainerService.getTfrainerData(data);
      res.send(trainer);
    } catch (error) {
      res.sendStatus(500);
    }
  });
  //get trainer by id
  router.get("/trainers/:id", (req, res) => {
    const trainerId = req.params.id;
    console.log(req.params);
    try {
      const trainer = trainerService.getTrainerById(trainerId);
      res.status(200).send(trainer);
    } catch (error) {
          res.status(404).send(error.message);
    }
  });
  //update trainer info
  router.patch("/trainers/:id/update", (req, res) => {
    const trainerUpdates = req.body;
    const trainerId = req.params.id;
    try {
      const updatedTrainer = trainerService.updateTrainer(
        trainerId,
        trainerUpdates
      );
      res.status(200).send(updatedTrainer);
    } catch (error) {
      if (error.message === "trainer not found") {
        res.status(404).send(error.message);
      } else if (error.message === "id cannot be changed") {
        res.status(400).send(error.message);
      } else {
        res.sendStatus(500);
      }
    }
  });
  //add new trainer
  router.post("/trainers/add", (req, res) => {
    const newTrainerData= req.body;
  
    try {
      const newTrainer= trainerService.addTrainer(newTrainerData);
      res.status(201).send(newTrainer);
    } catch (error) {
      res.sendStatus(500);
    }
  });
  //delete a trainer
  router.delete("/trainers/:id", (req, res) => {
    const trainerId = req.params.id;
    try {
      trainerService.deleteTrainer(trainerId);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  });
  //delete all trainers
 router.delete('/trainers', (req, res) => {
  const trainers = req.query;
  try {
    trainerService.deleteAll(trainers);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
 })
  module.exports = router;
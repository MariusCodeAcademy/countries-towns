const express = require('express');
const PlaceModel = require('../models/Place');
const router = express.Router();

// create new place
router.post('/api/place/new', async (req, res) => {
  const gotNewPlaceData = req.body;
  console.log(' gotNewPlaceData', gotNewPlaceData);
  //   res.json('you are about to create a place');
  // naujos vietos sukurimas naudojant modeli
  const newPlace = new PlaceModel(gotNewPlaceData);
  try {
    const creatingNewPlaceResult = await newPlace.save();
    res.json(creatingNewPlaceResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all places
router.get('/api/place', async (req, res) => {
  try {
    const allPlacesFromDb = await PlaceModel.find({});
    res.json(allPlacesFromDb);
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;

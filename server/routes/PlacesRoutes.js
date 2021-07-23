const express = require('express');
const router = express.Router();

// create new place
router.post('/api/place/new', (req, res) => {
  res.json('you are about to create a place');
});

module.exports = router;

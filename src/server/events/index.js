const express = require('express');
const mockData = require('./mock-data');

const router = express.Router();

router.get('/events', (req, res) => {
  res.send(mockData);
});

module.exports = router;

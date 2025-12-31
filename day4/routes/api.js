const express = require('express');
const router = express.Router();

// Example API route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Another endpoint
router.get('/data', (req, res) => {
  res.json({ data: [1, 2, 3, 4, 5] });
});

module.exports = router;

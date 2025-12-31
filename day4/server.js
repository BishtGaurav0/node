const express = require('express');
const app = express();
const PORT = 3000;

// Import middleware and routes
const rateLimit = require('./middleware/rateLimiter');
const apiRoutes = require('./routes/api');

// Apply rate limiter to all routes
// Limit: 10 requests per minute per IP
app.use(rateLimit({ requests: 10, windowMs: 60 * 1000 }));

// Use API routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Rate limiting middleware
const rateLimit = (options) => {
  const { requests = 10, windowMs = 60 * 1000 } = options;

  // Store IP counts in memory
  const ipCounts = {};

  return (req, res, next) => {
    const ip = req.ip;

    if (!ipCounts[ip]) {
      ipCounts[ip] = { count: 1, startTime: Date.now() };
    } else {
      const currentTime = Date.now();

      // Reset count if window has passed
      if (currentTime - ipCounts[ip].startTime > windowMs) {
        ipCounts[ip].count = 1;
        ipCounts[ip].startTime = currentTime;
      } else {
        ipCounts[ip].count++;
      }
    }

    if (ipCounts[ip].count > requests) {
      return res
        .status(429)
        .json({ error: 'Too many requests. Please try again later.' });
    }

    next();
  };
};

module.exports = rateLimit;

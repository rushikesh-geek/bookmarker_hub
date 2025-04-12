const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error: ' + Object.values(err.errors).map(e => e.message).join(', ') });
    }
  
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
  
    res.status(500).json({ message: 'Something went wrong on the server' });
  };
  
  module.exports = errorHandler;
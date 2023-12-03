// next(err)
module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  res.status(500).send('Server Error');
};

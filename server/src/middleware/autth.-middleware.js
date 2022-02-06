module.exports = function (req, res, next) {
  try {

  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
}
const ApiError = require("../exceptions/api-error")
const tokenService = require('../service/token-service')
module.exports = function (req, res, next) {
  try {
    const authorizatonHeader = req.headers.authorizaton;
    if (!authorizatonHeader) {
      return next(ApiError.UnauthorizedError());
    }
    const accessToken = authorizatonHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {

      return next(ApiError.UnauthorizedError());
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
}
// const UserService = require("../service/user-service.ts");
import userService from "../service/user-service";
import UserService from "../service/user-service";
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/api-error')
class UserController {
  constructor() {
    // const UserService = require("../service/user-service");
    // this.userService = new UserService();
  }
  async registration(req: any, res: any, next: any) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
      }
      const { email, password } = req.body;

      const userData = await UserService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async login(req: any, res: any, next: any) {
    try {
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) { next(error); }
  }
  async logout(req: any, res: any, next: any) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token)


    } catch (error) { next(error); }
  }
  async activate(req: any, res: any, next: any) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink)
      return res.redirect(process.env.CLIENT_URL)
    } catch (error) { }
  }
  async refresh(req: any, res: any, next: any) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);

    } catch (error) { next(error); }
  }
  async getUsers(req: any, res: any, next: any) {

    try {
      const users = await userService.getAllUsers()
      res.json(users);
    } catch (error) { next(error); }
  }
}
export default new UserController();

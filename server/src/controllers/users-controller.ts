// const UserService = require("../service/user-service.ts");
import userService from "../service/user-service";
import UserService from "../service/user-service";

class UserController {
  constructor() {
    // const UserService = require("../service/user-service");
    // this.userService = new UserService();
  }
  async registration(req: any, res: any, next: any) {
    try {
      const { email, password } = req.body;

      const userData = await UserService.registration(email, password);
      res.cookie("refreshToken", userData.accessToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }
  async login(req: any, res: any, next: any) {
    try {
    } catch (error) { }
  }
  async logout(req: any, res: any, next: any) {
    try {
    } catch (error) { }
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
    } catch (error) { }
  }
  async getUsers(req: any, res: any, next: any) {
    console.log("test");
    try {
      res.json(["123", "44"]);
    } catch (error) { }
  }
}
export default new UserController();

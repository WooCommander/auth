// const UserService = require("../service/user-service.ts");
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
      return res.json(userData);
      // res.cookie("refreshToken", userData.refreshToken, {
      //   maxAge: 30 * 24 * 60 * 60 * 1000,
      //   httpOnly: true,
      // });
      // return res.json(userData);
    } catch (error) {}
  }
  async login(req: any, res: any, next: any) {
    try {
    } catch (error) {}
  }
  async logout(req: any, res: any, next: any) {
    try {
    } catch (error) {}
  }
  async activate(req: any, res: any, next: any) {
    try {
    } catch (error) {}
  }
  async refresh(req: any, res: any, next: any) {
    try {
    } catch (error) {}
  }
  async getUsers(req: any, res: any, next: any) {
    console.log("test");
    try {
      res.json(["123", "44"]);
    } catch (error) {}
  }
}
export default new UserController();

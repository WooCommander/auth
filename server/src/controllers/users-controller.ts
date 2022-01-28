// const UserService = require("../service/user-service.ts");
import UserService from "../service/user-service"

class UserController {
  userService;
  constructor() {
    // const UserService = require("../service/user-service");
    this.userService = new UserService();
  }
  async registration(req: any, res: any, next: any) {
    try {
      const { email, password } = req.body;
      const userData = await this.userService.registration(email, password);
    } catch (error) { }
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

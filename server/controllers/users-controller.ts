const UserService = require("../service/user-service.ts");

class UserController {
  userService;
  constructor() {
    // const UserService = require("../service/user-service");
    this.userService = new UserService();
  }
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await this.userService.registration(email, password);
    } catch (error) {}
  }
  async login(req, res, next) {
    try {
    } catch (error) {}
  }
  async logout(req, res, next) {
    try {
    } catch (error) {}
  }
  async activate(req, res, next) {
    try {
    } catch (error) {}
  }
  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }
  async getUsres(req, res, next) {
    console.log("test");
    try {
      res.json(["123", "44"]);
    } catch (error) {}
  }
}
module.exports = new UserController();

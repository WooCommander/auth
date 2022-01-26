import UserModel from "../models/user-models";
import MailService from "./mail-service";
import bcrypt from "bcrypt";

export default class UserService {
  mailService: MailService;
  constructor() {
    this.mailService = new MailService();
  }
  async registration(email: string, password: string) {
    const candidate = await UserModel.findOne({ email });
    const uuid = require("uuid");
    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4();
      const user = await UserModel.create({ email, password, activationLink });

      await this.mailService.sendActivationMail(email, activationLink);
    }
  }
}

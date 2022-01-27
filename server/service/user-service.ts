import UserModel from "../models/user-models";

import MailService from "./mail-service";
import bcrypt from "bcrypt";
import TokenService from "./token-service";
import UserDto from "../dtos/user-dtos";

export default class UserService {
  mailService: MailService;
  tokenService: TokenService;
  constructor() {
    this.mailService = new MailService();
    this.tokenService = new TokenService();
  }
  async registration(email: string, password: string) {
    const candidate = await UserModel.findOne({ email });
    const uuid = require("uuid");
    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({ email, password, activationLink });

    await this.mailService.sendActivationMail(email, activationLink);
    const userDto = new UserDto(user);
    const tokens = this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

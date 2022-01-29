import MailService from "./mail-service";
import bcrypt from "bcrypt";
import TokenService from "./token-service";
import UserDto from "../dtos/user-dtos";

class UserService {
  mailService: MailService;
  tokenService: TokenService;
  constructor() {
    this.mailService = new MailService();
    this.tokenService = new TokenService();
  }
  async registration(email: string, password: string) {
    console.log(email, password);
    const User = require("../models/user-model");
    let candidate;
    candidate = await User.findOne({ email });
    console.log("candidate=", candidate);
    const uuid = require("uuid");
    console.log("+");
    if (candidate) {
      return false;
      // throw new Error(
      //   `Пользователь с почтовым адресом ${email} уже существует`
      // );
    }
    console.log("+");

    const hashPassword = await bcrypt.hash(password, 3);
    console.log(hashPassword);

    const activationLink = uuid.v4();
    console.log(activationLink);
    const user = await User.create({ email, password, activationLink });
    console.log(user);

    await this.mailService.sendActivationMail(email, activationLink);
    const userDto = new UserDto(user);
    const tokens = this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}
export default new UserService();

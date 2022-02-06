import MailService from "./mail-service";
import bcrypt from "bcrypt";
import TokenService from "./token-service";

const ApiError = require('../exceptions/api-error');
import UserDto from "../dtos/user-dtos";
// import UserModel from "../models/user-model";

class UserService {
  mailService: MailService;
  tokenService: TokenService;
  constructor() {
    this.mailService = new MailService();
    this.tokenService = new TokenService();
  }
  async registration(email: string, password: string) {
    const UserModel = require("../models/user-model");
    let candidate;
    candidate = await UserModel.findOne({ email });
    const uuid = require("uuid");
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({ email, password, activationLink });
    await this.mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );
    const userDto = new UserDto(user);
    const token = await this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, token.refreshToken);
    return { ...token, user: userDto };
  }
  async activate(activateLink: string) {
    const UserModel = require("../models/user-model");
    const user = await UserModel.findOne({ activateLink })
    if (!user) {
      throw ApiError.BadRequest('Некорректная ссылка активации')
    }
    user.isActivated = true;
    await user.save();

  }
  async login(email: string, password: string) {
    const UserModel = require("../models/user-model");
    const user = await UserModel.findeOne({ email })
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден')
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль')
    }
    const userDto = new UserDto(user);
    const token = this.tokenService.generateTokens({ ...userDto })
    await this.tokenService.saveToken(userDto.id, token.refreshToken);
    return { ...token, user: userDto };
  }
  async logout(refreshToken: string) {
    const token = await this.tokenService.removeToken(refreshToken);
    return token
  }
  async refresh(refreshToken: string) {
    const UserModel = require("../models/user-model");
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = this.tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await this.tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id)
    const userDto = new UserDto(user);
    const token = this.tokenService.generateTokens({ ...userDto })
    await this.tokenService.saveToken(userDto.id, token.refreshToken);
    return { ...token, user: userDto };
  }
  async getAllUsers() {
    const UserModel = require("../models/user-model");
    const users = await UserModel.find();
    return users
  }
}

export default new UserService();

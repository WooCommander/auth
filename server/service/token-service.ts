import jwt from "jsonwebtoken";
import { env } from "process";
import tokenModel from "../models/token-models";
export default class TokenService {
  generateTokens(payload): { accessToken: string; refreshToken: string } {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, "30m");
    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_ACCESS_SECRET,
      "30d"
    );
    return {
      accessToken,
      refreshToken,
    };
  }
  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
}

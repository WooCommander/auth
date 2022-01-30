import { env } from "process";

const jwt = require("jsonwebtoken");

export default class TokenService {
  generateTokens(payload: any): { accessToken: string; refreshToken: string } {
    const accessToken = jwt.sign(payload, env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(payload, env.JWT_REFRESH_ACCESS_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  async saveToken(userId: any, refreshToken: any) {
    const TokenSchema = require("../models/token-models");
    const tokenData = await TokenSchema.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenSchema.create({ user: userId, refreshToken });
    return token;
  }
}

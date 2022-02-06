import { env } from "process";

const jwt = require("jsonwebtoken");

export default class TokenService {
  generateTokens(payload: any): { accessToken: string; refreshToken: string } {
    const accessToken = jwt.sign(payload, env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(payload, env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token: string) {
    try {
      const userDate = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
      return userDate;
    } catch (error) {
      return null

    }
  }
  validateRefreshToken(token: string) {
    try {
      const userDate = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
      return userDate;
    } catch (error) {

    }
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
  async removeToken(refreshToken: string) {
    const TokenSchema = require("../models/token-models");
    const tokenData = await TokenSchema.deleteOne({ refreshToken });
    return tokenData
  }
  async findToken(refreshToken: string) {
    const TokenSchema = require("../models/token-models");
    const tokenData = await TokenSchema.findOne({ refreshToken });
    return tokenData
  }
}

const jwt = require("jsonwebtoken");

import TokenSchema from "../models/token-models";
export default class TokenService {
  generateTokens(payload: any): { accessToken: string; refreshToken: string } {
    const accessToken = jwt.sign(payload, "jwt-secret-key", {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(payload, "jwt-refresh-secret-key", {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  async saveToken(userId: any, refreshToken: any) {
    const tokenData = await TokenSchema.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenSchema.create({ user: userId, refreshToken });
    return token;
  }
}

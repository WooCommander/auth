import jwt from "jsonwebtoken";
import { env } from "process";
import tokenModel from "../models/token-models";
export default class TokenService {
  generateToken(payload): { accessToken: string; refreshToken: string } {
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
}

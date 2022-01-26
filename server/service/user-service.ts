import UserModel from "../models/user-models";
import bcrypt from "bcrypt";
export default class UserService {
  async registration(email: string, password: string) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
      const hashPassword = await bcrypt.hash(password, 3);
      const user = await UserModel.create({ email, password });
    }
  }
}

const { Scheme, model } = require("mongoose");

const TokenSchema = new Scheme({
  user: { type: Scheme.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, require: true },
});
export default TokenSchema;

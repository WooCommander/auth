const { Scheme, model } = require('mongoose');

const UserSchema = new Scheme({
  email: { type: String, require: true },
  password: { type: String, require: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },

});
module.exports = model('User', UserSchema);

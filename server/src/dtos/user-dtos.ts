export default class UserDto {
  email: string;
  id: string;
  isActivated: string;
  constructor(model: any) {
    console.log("model", model);

    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
}

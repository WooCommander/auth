export default class InputBoxModel {
  Name: string;
  Value: string;
  Type: string = "text";
  Requared: boolean;
  constructor(obj: Partial<InputBoxModel> = null) {
    Object.assign(this, obj);
  }
}
export default class InputBoxModel {
  Name: string;
  Value: string;
  Type: string = "text";
  Required: boolean;
  constructor(obj: Partial<InputBoxModel> = null) {
    Object.assign(this, obj);
  }
}
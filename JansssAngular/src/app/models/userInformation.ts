export class UserInformation {
  email: string;
  password: string;

  constructor(obj: any = null, password: any) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}
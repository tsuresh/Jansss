export class UserInformation {
  username: string;
  email: string;
  password: string;
  // username: string;

  constructor(obj: any = null, password: any) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}

import BaseSignIn from "./api/BaseSignIn";
import SuperAdminSignIn from "./api/SuperAdminSignIn";
import { AdminTypes } from "../admin-types-const";

export default class SignInApiExecutorBuilder {
  type: number;

  constructor(type: number) {
    this.type = type;
  }

  build(): BaseSignIn {
    if (this.type === AdminTypes.SUPER_ADMIN) {
      return new SuperAdminSignIn();
    }
    return new BaseSignIn();
  }
}

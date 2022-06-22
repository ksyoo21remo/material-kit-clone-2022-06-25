import BaseSignUp from "./api/BaseSignUp";
import SuperAdminSignUp from "./api/SuperAdminSignUp";
import { AdminTypes } from "../admin-types-const";

export default class SignUpApiExecutorBuilder {
  type: number;

  constructor(type: number) {
    this.type = type;
  }

  build(): BaseSignUp {
    if (this.type === AdminTypes.SUPER_ADMIN) {
      return new SuperAdminSignUp();
    }
    return new BaseSignUp();
  }
}

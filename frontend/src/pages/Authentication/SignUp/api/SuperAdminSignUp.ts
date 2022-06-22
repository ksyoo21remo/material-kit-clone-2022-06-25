import BaseSignUp from "./BaseSignUp";
import { SignUpParam, SignUpResponse } from "../types";
import { serverDomain } from "../../../../utils/serverDomain";
import { urls } from "../../../../urls";

export default class SuperAdminSignUp extends BaseSignUp {
  async request(signUpParam: SignUpParam): Promise<SignUpResponse> {
    console.log(
      "최고관리자 가입 api: ",
      serverDomain() + "/" + urls.superAdmin.signUp,
      "signUpParam:",
      signUpParam,
    );
    return {
      uuid: "super-admin-sign-up-mock-uuid",
      accessToken: "super-admin-sign-up-mock-access-token",
      refreshToken: "super-admin-sign-up-mock-refresh-token",
    };
  }
}

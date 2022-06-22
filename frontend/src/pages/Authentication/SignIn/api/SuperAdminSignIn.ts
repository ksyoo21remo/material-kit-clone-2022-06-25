import BaseSignIn from "./BaseSignIn";
import { SignInParam, SignInResponse } from "../types";
import { serverDomain } from "../../../../utils/serverDomain";
import { urls } from "../../../../urls";

export default class SuperAdminSignIn extends BaseSignIn {
  async request(signInParam: SignInParam): Promise<SignInResponse> {
    console.log(
      "최고관리자 로그인 api: ",
      serverDomain() + "/" + urls.superAdmin.signIn,
      ", signInParam:",
      signInParam,
    );
    return {
      uuid: "mock-uuid",
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
    };
  }
}

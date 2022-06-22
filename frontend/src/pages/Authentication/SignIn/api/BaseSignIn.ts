import { SignInParam, SignInResponse } from "../types";

export default class BaseSignIn {
  async request(signInParam: SignInParam): Promise<SignInResponse> {
    console.log(
      "베이스 로그인 api: ",
      "???",
      ", signInParam:",
      signInParam,
    );
    return {
      uuid: "base-sign-in-mock-uuid",
      accessToken: "",
      refreshToken: "",
    };
  }
}

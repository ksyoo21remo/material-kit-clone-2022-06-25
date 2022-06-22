import { SignUpParam, SignUpResponse } from "../types";

export default class BaseSignUp {
  async request(signUpParam: SignUpParam): Promise<SignUpResponse> {
    console.log(
      "베이스 가입 api: ",
      "???",
      ", signUpParam:",
      signUpParam,
    );
    return {
      uuid: "base-sign-up-mock-uuid",
      accessToken: "",
      refreshToken: "",
    };
  }
}

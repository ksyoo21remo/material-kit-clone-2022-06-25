export interface SignInParam {
  loginid: string;
  password: string;
}

export interface SignInResponse {
  uuid: string;
  accessToken: string;
  refreshToken: string;
}

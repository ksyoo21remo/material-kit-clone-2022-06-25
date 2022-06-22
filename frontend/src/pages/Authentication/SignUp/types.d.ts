export interface SignUpParam {
  loginid: string;
  password: string;
  mbrname: string;
  phone: string;
}

export interface SignUpResponse {
  uuid: string;
  accessToken: string;
  refreshToken: string;
}

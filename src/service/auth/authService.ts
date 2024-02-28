import {
  HttpPaginationResponse,
  HttpResponse,
  HttpStatusEnum,
} from "@/model/http/httpEnum";
import { httpGet, httpPost } from "../http/httpService";
import { IAuthService } from "./authServiceInterface";
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, UserInfo } from "@/model/auth/AuthModel";

export class AuthService implements IAuthService {
  private readonly authUrl: string = "auth";

  public login = async (request: LoginRequest): Promise<HttpResponse<LoginResponse>> => {
    const queryResult = await httpPost<LoginResponse>(
      request,
      `${this.authUrl}/login`
    );
    console.log(request, `${this.authUrl}/login`)
    if (queryResult.code == HttpStatusEnum.Success.code) {
      localStorage.setItem("token", queryResult.data?.accessToken as string);
        localStorage.setItem(
          "expired",
          queryResult.data?.expired?.toISOString() as string
        );
      const userInfoRes = await httpGet<UserInfo>("user/info", null, true);
      if (userInfoRes.code == 200) {
        console.log(userInfoRes.data)
        localStorage.setItem("userInfo", JSON.stringify(userInfoRes.data));
      } else {
        console.log(
          "🚀 ~ AuthService ~ userInfoRes.message:",
          userInfoRes.message
        );
      }
    }
    return queryResult;
  };

  public signup = async (
    request: SignupRequest
  ): Promise<HttpResponse<SignupResponse>> => {
    const queryResult = await httpPost<SignupResponse>(
      request,
      `${this.authUrl}/register`
    );
    return queryResult;
  };
}

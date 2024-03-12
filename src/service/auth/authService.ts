import {
  HttpPaginationResponse,
  HttpResponse,
  HttpStatusEnum,
} from "@/model/http/httpEnum";
import { httpGet, httpPost } from "../http/httpService";
import { IAuthService } from "./authServiceInterface";
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, UserInfo } from "@/model/auth/AuthModel";
import { setCookie, deleteCookie } from "cookies-next";

export class AuthService implements IAuthService {
  private readonly authUrl: string = "auth";

  public login = async (
    request: LoginRequest
  ): Promise<HttpResponse<LoginResponse>> => {
    const queryResult = await httpPost<LoginResponse>(
      request,
      `${this.authUrl}/login`
    );
    if (queryResult.code == HttpStatusEnum.Success.code) {
      sessionStorage.setItem("token", queryResult.data?.accessToken as string);
      sessionStorage.setItem(
          "expired",
          queryResult.data?.expired?.toISOString() as string
        );
      const userInfoRes = await httpGet<UserInfo>("user/info", null, true);
      if (userInfoRes.code == 200) {
        sessionStorage.setItem("userInfo", JSON.stringify(userInfoRes.data));
        sessionStorage.setItem("roles", JSON.stringify(userInfoRes.data?.roles));
        setCookie("roles", JSON.stringify(userInfoRes.data?.roles));
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

  public logout = () => {
    sessionStorage.clear();
    deleteCookie("roles");
    
  }

  public getUserInfo = () => {
    return sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo") as string)
    : null;
  }
}

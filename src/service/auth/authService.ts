import { HttpPaginationResponse, HttpResponse } from "@/model/http/httpEnum";
import { httpGet, httpPost } from "../http/httpService";
import { IAuthService } from "./authServiceInterface";

export class AuthService implements IAuthService {
  private readonly authUrl: string = "auth";

  public login = async (
    request: LoginRequest
  ): Promise<HttpResponse<LoginResponse>> => {
    const queryResult = await httpPost<LoginResponse>(
      request,
      `${this.authUrl}/login`
    );
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

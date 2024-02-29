import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "@/model/auth/AuthModel";
import { HttpResponse } from "@/model/http/httpEnum";

export interface IAuthService{ 
    login: (request: LoginRequest) => Promise<HttpResponse<LoginResponse>>,
    signup: (request: SignupRequest) => Promise<HttpResponse<SignupResponse>>
}
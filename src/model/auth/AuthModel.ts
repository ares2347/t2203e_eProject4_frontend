export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  expired: Date;
}
export interface SignupRequest {
  email: string;
  phone: string;
  fullName: string;
  password: string;
}

export interface SignupResponse {
  accessToken: string;
  expired: Date;
}

export interface UserInfo {
  userId: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  
  roles: string[];
}

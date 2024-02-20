interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  expired: Date;
}
interface SignupRequest {
  email: string;
  phone: string;
  fullName: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
  expired: Date;
}

interface UserInfo {
  userId: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  roles: string[];
}

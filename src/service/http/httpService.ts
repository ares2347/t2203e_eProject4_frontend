import { HttpResponse, HttpStatusEnum } from "@/model/http/httpEnum";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie, getCookies } from "cookies-next";

// const baseUrl: string = "http://localhost:8080/api/";
const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL ?? "";

//HTTP GET
export async function httpGet<T>(
  endpoint?: string,
  params?: any,
  isAuth: boolean = false
): Promise<HttpResponse<T>> {
  console.log(baseUrl)
  const url = `${baseUrl}/${endpoint ?? ""}`;
  const accessToken = getCookie("token");
  const config: AxiosRequestConfig = {
    baseURL: url,
    params: params,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    method: "get",
  };
  if (isAuth && config.headers)
    config.headers.Authorization = `Bearer ${accessToken}`;
    console.log("🚀 ~ accessToken:", accessToken)

  return await axios<T>(config)
    .then((res) => {
      const response: HttpResponse<T> = {
        code: res.status,
        data: res.data,
        message: res.statusText,
      };
      return response;
    })
    .catch((err) => {
      console.error("🚀 ~ err:", err);
      let message;
      switch (err.response?.status) {
        case HttpStatusEnum.BadRequest.code:
          message = HttpStatusEnum.BadRequest.message;
          break;
        case HttpStatusEnum.Unauthorized.code:
          message = HttpStatusEnum.Unauthorized.message;
          break;
        case HttpStatusEnum.Success.code:
          message = HttpStatusEnum.Success.message;
          break;
        case HttpStatusEnum.InternalServerError.code:
          message = HttpStatusEnum.InternalServerError.message;
          break;
        default:
          message = HttpStatusEnum.InternalServerError.message;
          break;
      }
      const response: HttpResponse<T> = {
        code: err.response?.status ?? HttpStatusEnum.InternalServerError.code,
        data: err.response?.data,
        message: message,
      };
      return response;
    });
}

//HTTP POST

export async function httpPost<T>(
  body: any,
  endpoint?: string,
  params?: any,
  isAuth: boolean = false
): Promise<HttpResponse<T>> {
  const url = `${baseUrl}/${endpoint ?? ""}`;
  const accessToken = getCookie("token");
  const config: AxiosRequestConfig = {
    baseURL: url,
    params: params,
    data: body,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    method: "post",
  };
  if (isAuth && config.headers)
  config.headers.Authorization = `Bearer ${accessToken}`;

  return await axios<T>(config)
    .then((res) => {
      const response: HttpResponse<T> = {
        code: res.status,
        data: res.data,
        message: res.statusText,
      };
      return response;
    })
    .catch((err) => {
      console.error("🚀 ~ err:", err);
      let message;
      switch (err.response?.status) {
        case HttpStatusEnum.BadRequest.code:
          message = HttpStatusEnum.BadRequest.message;
          break;
        case HttpStatusEnum.Unauthorized.code:
          message = HttpStatusEnum.Unauthorized.message;
          break;
        case HttpStatusEnum.Success.code:
          message = HttpStatusEnum.Success.message;
          break;
        case HttpStatusEnum.InternalServerError.code:
          message = HttpStatusEnum.InternalServerError.message;
          break;
        default:
          message = HttpStatusEnum.InternalServerError.message;
          break;
      }
      const response: HttpResponse<T> = {
        code: err.response?.status ?? HttpStatusEnum.InternalServerError.code,
        data: err.response?.data,
        message: message,
      };
      return response;
    });
}
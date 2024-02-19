import { HttpResponse, HttpStatusEnum } from "@/model/http/httpEnum";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL ?? "";
const accessToken: string = "";

//HTTP GET
export async function httpGet<T>(
  endpoint?: string,
  params?: any
): Promise<HttpResponse<T>> {
  const url = `${baseUrl}/${endpoint ?? ""}`;
  const config: AxiosRequestConfig = {
    baseURL: url,
    params: params,
    headers: {
      // Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    method: "get",
  };

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
  params?: any
): Promise<HttpResponse<T>> {
  const url = `${baseUrl}/${endpoint ?? ""}`;
  console.log("🚀 ~ url:", url);

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

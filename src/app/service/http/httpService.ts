import { HttpResponse, HttpStatusEnum } from "@/app/model/http/httpEnum";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseUrl: string = process.env.REACT_APP_BASE_URL ?? "";
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
    method: "get"
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
      console.error("🚀 ~ file: httpService.ts:36 ~ err:", err);
      const response: HttpResponse<T> = {
        code: err.status ?? HttpStatusEnum.InternalServerError.code,
        data: null,
        message:
          err.cause?.message ?? HttpStatusEnum.InternalServerError.message,
      };
      return response;
    });
}

//HTTP POST



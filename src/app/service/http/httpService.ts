import {HttpStatusEnum } from "@/app/model/httpModel/httpEnum";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const baseUrl: string = process.env.REACT_APP_BASE_URL ?? "";
const accessToken: string = "";

console.log(baseUrl);
export async function httpGet<T>(
  endpoint?: string,
  params?: any
): Promise<AxiosResponse<T> | AxiosError> {
  const url = `${baseUrl}/${endpoint ?? ""}`;
  const config: AxiosRequestConfig = {
    baseURL: url,
    params: params,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
  return await axios<T>(config)
    .then((res: AxiosResponse<T>) => {
        return res;
    })
    .catch((err: AxiosError) => {
        return err;
    })
    .catch((err) => {
        console.error("🚀 ~ file: httpService.ts:36 ~ err:", err)
        return new AxiosError(HttpStatusEnum.InternalServerError.message, HttpStatusEnum.InternalServerError.code.toString());
    });
}

import { HttpResponse, HttpPaginationResponse } from "@/model/http/httpEnum";
import { IVehicleService } from "./vehicleServiceInterface";
import { httpPost, httpGet } from "../http/httpService";

export class VehicleService implements IVehicleService{
    private readonly vehicleConfigUrl : string = "brand/vehicle/config";

    getAllVehicleListConfigAsync = async (page: number, size: number) :  Promise<HttpResponse<HttpPaginationResponse<VehicleModel>>> => {
        return await httpGet<HttpPaginationResponse<VehicleModel>>(`${this.vehicleConfigUrl}/list`, {
            page: page,
            size: size
         }, true);
    }
    addVehicleConfig = async (body: AddVehicleConfigRequest) : Promise<HttpResponse<VehicleModel>> => {
        return await httpPost<VehicleModel>(body, this.vehicleConfigUrl, null, true)
    }

    getAllVehicleConfigAsync = async () : Promise<HttpResponse<VehicleModel[]>> => {
        return await httpGet<Array<VehicleModel>>(`${this.vehicleConfigUrl}`, null, true);
    }
 }
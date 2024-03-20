import { HttpResponse, HttpPaginationResponse } from "@/model/http/httpEnum";
import { IVehicleService } from "./vehicleServiceInterface";
import { httpPost, httpGet } from "../http/httpService";

export class VehicleService implements IVehicleService{
    private readonly vehicleConfigUrl : string = "brand/vehicle";

    getAllVehicleListConfigAsync = async (page: number, size: number) :  Promise<HttpResponse<HttpPaginationResponse<VehicleModel>>> => {
        return await httpGet<HttpPaginationResponse<VehicleModel>>(`${this.vehicleConfigUrl}/get-vehicles`, {
            page: page,
            size: size
         }, true);
    }
    addVehicleConfig = async (body: AddVehicleConfigRequest) : Promise<HttpResponse<VehicleModel>> => {
        return await httpPost<VehicleModel>(body, `${this.vehicleConfigUrl}/create-vehicle`, null, true)
    }

    getAllVehicleConfigAsync = async () : Promise<HttpResponse<VehicleModel[]>> => {
        return await httpGet<Array<VehicleModel>>(`${this.vehicleConfigUrl}/get-vehicles`, null, true);
    }
 }
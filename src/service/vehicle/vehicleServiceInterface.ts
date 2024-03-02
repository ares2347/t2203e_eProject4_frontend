import { HttpPaginationResponse, HttpResponse } from "@/model/http/httpEnum";

export interface IVehicleService {
    getAllVehicleConfigAsync: (page: number, size: number) => Promise<HttpResponse<HttpPaginationResponse<VehicleModel>>>;
    addVehicleConfig: (body: AddVehicleConfigRequest) => Promise<HttpResponse<VehicleModel>>;
}
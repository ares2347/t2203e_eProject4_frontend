import { HttpPaginationResponse, HttpResponse } from "@/model/http/httpEnum";

export interface IVehicleService {
    getAllVehicleListConfigAsync: (page: number, size: number) => Promise<HttpResponse<HttpPaginationResponse<VehicleModel>>>;
    getAllVehicleConfigAsync: () => Promise<HttpResponse<Array<VehicleModel>>>;
    addVehicleConfig: (body: AddVehicleConfigRequest) => Promise<HttpResponse<VehicleModel>>;
}
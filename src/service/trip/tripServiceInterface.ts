import { HttpPaginationResponse, HttpResponse } from "@/model/http/httpEnum";
import { AddTripConfigRequest, TripModel } from "@/model/trip/TripModel";

export interface ITripService {
    getAllTrip: () => TripModel[];
    getPublicTripAsync: (departFrom: string, departAt: string, arriveTo: string, vehicleType: string, page: number, size: number) => Promise<HttpResponse<HttpPaginationResponse<TripModel>>>;
    getAllBrandTripsAsync: (departFrom: string, departAt: string, arriveTo: string, vehicleType: string, page: number, size: number) => Promise<HttpResponse<HttpPaginationResponse<TripModel>>>;
    getAllBrandRoutesAsync: (departFrom: string, departAt: string, arriveTo: string, vehicleType: string, page: number, size: number) => Promise<HttpResponse<HttpPaginationResponse<TripModel>>>;
    addTripConfig: (request: AddTripConfigRequest) => Promise<HttpResponse<TripModel>>
}
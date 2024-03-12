import { HttpPaginationResponse, HttpResponse } from "@/model/http/httpEnum";

export interface ITripService {
    getAllTrip: () => TripModel[];
    getAllTripAsync: (departFrom: string, departAt: string, arriveTo: string, page: number, size: number) => Promise<HttpResponse<HttpPaginationResponse<TripModel>>>;
}
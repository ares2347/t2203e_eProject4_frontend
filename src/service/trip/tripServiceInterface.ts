import { HttpResponse } from "@/app/model/http/httpEnum";

export interface ITripService {
    getAllTrip: () => TripModel[];
    getAllTripConfig: (page: number, size: number) => Promise<HttpResponse<TripModel[]>>;
}
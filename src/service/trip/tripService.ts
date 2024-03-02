import { HttpPaginationResponse, HttpResponse, SortEnum } from "@/model/http/httpEnum";
import { ITripService } from "./tripServiceInterface";
import { TripListMock } from "@/model/mock/tripMock";
import { httpGet, httpPost } from "@/service/http/httpService";
export class TripService implements ITripService{
   private readonly tripUrl : string = "public/trip";
   private readonly brandTripUrl: string = "brand/trip"
   getAllTrip = () => TripListMock();

   public getAllTripAsync = async (departFrom: string, departAt: string, arriveTo: string | null, page: number, size: number) : Promise<HttpResponse<HttpPaginationResponse<TripModel>>> => {
      return await httpGet<HttpPaginationResponse<TripModel>>(`${this.tripUrl}/config/list`, {
         sortBy: "depart_at",
         sort: SortEnum.ASC,
         page: page,
         size: size,
         departFrom: departFrom,
         departAt: departAt,
         arriveTo: arriveTo
      }, true);
   }

   addTripConfig = async (request: AddTripConfigRequest): Promise<HttpResponse<TripModel>> => {
      return await httpPost<TripModel>(request, `${this.brandTripUrl}/config`, null, true);
   }
}
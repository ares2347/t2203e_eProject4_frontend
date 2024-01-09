import {TripListMock} from "@/app/model/mock/tripMock";
import { httpGet } from "../http/httpService";
import { HttpPaginationResponse, HttpResponse, SortEnum } from "@/app/model/http/httpEnum";
import { ITripService } from "./tripServiceInterface";
export class TripService implements ITripService{
   private readonly tripUrl : string = "trip";
   getAllTrip = () => TripListMock();

   public getAllTripConfig = async (page: number, size: number) : Promise<HttpResponse<TripModel[]>> => {
      const queryResult = await httpGet<HttpPaginationResponse<TripConfigQueryModel>>(`${this.tripUrl}/list-config`, {
         sortBy: "departAt",
         sort: SortEnum.ASC,
         page: page,
         size: size
      })
      const response : HttpResponse<TripModel[]> = {
         code : queryResult.code,
         data : queryResult.data?.content?.map<TripModel>(x => ({
            tripId: x.tripConfigId,
            brandName: x.vehicleConfig.brand,
            vehicleType: x.vehicleConfig.vehicleType,
            departFrom: x.departFrom,
            departAt: x.departAt.toDateString(),
            arriveAt: x.arriveAt.toDateString(),
            arriveTo: x.arriveTo,
            seatAmount: x.vehicleConfig.seatAmount,
            price: x.ticketConfigs.reduce((acc, val) => {return `${acc}, ${val}`}, 0)
         })) ?? new Array<TripModel>(),
         message: queryResult.message
      }
      return response;
   }
}
import {TripListMock} from "@/app/model/mock/tripMock";
import { httpGet } from "../http/httpService";
import { SortEnum } from "@/app/model/httpModel/httpEnum";
export class TripService implements ITripService{
   private readonly tripUrl : string = "trip";
   getAllTrip = () => TripListMock();

   getAllTripConfig = (page: number, size: number) => {
      return httpGet(this.tripUrl, {
         sortBy: "departAt",
         sort: SortEnum.DESC,
         page: page,
         size: size
      })
   }
}
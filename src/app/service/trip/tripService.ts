import {TripListMock} from "@/app/model/mock/tripMock";

export class TripService implements ITripService{
   getAllTrip = () => TripListMock();
}
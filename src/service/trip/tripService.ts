import { TripListMock } from "@/model/mock/tripMock";

export class TripService implements ITripService{
   getAllTrip = () => TripListMock();
}
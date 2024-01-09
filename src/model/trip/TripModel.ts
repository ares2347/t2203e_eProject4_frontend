interface TripModel extends IBaseModel {
    tripId:number;
    brandName: string;
    vehicleType: string;
    tripType: string;
    departFrom: string;
    departAt: string;
    arriveAt: string;
    arriveTo: string;
    seatAmount: string;
    price: number;
}
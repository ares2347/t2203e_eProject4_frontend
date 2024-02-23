interface TripModel extends IBaseModel {
    tripId: string;
    brandName: string;
    vehicleType: string;
    departFrom: string;
    triptype: string;
    departAt: string;
    arriveAt: string;
    arriveTo: string;
    seatAmount: string;
    price: number;
}

interface TripConfigQueryModel extends IBaseModel {
    tripConfigId: string;
    departFrom: string;
    departAt: Date;
    arriveTo: string;
    arriveAt: Date;
    stops: string;
    vehicleConfig: any;
    trips: Array<any>;
    ticketConfigs: Array<any>;
}
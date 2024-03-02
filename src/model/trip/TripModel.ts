interface TripModel extends IBaseModel {
    tripId: string;
    tripConfigId: string;
    brandName: string;
    tripStatus: string;
    departDate: Date;
    seatRemains: number;
    driverEmail: string;
    driverPhone: string;
    driverName: string;
    departAt: string;
    departFrom: string;
    arriveTo: string;
    arriveAt: string;
    price: number;
    vehicleType: string;
    seatAmount: number;
}

interface TripConfigQueryModel extends IBaseModel {
    tripConfigId: string;
    departFrom: string;
    departAt: Date;
    arriveTo: string;
    arriveAt: Date;
    stops: string;
    vehicleConfig: string;
    trips: Array<any>;
    ticketConfigs: Array<any>;
}

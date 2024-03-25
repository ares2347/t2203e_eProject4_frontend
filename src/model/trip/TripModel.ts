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

interface AddTripConfigRequest{
    startCity?: string | undefined;
    startStation?: string | undefined;
    endCity?: string | undefined;
    endStation?: string | undefined;
    routeDuration?: string | undefined;
    earliestStartTimeFromStart?: string | undefined;
    latestStartTimeFromStart?: string | undefined;
    earliestStartTimeFromEnd?: string | undefined;
    latestStartTimeFromEnd?: string | undefined;
    gapDurationBetweenTrip?: string | undefined;
    gapDurationBetweenRoute?: string | undefined;
    stationsMapping?: string | undefined;
    vehicleType?: string | undefined;
    seatAmount?: number | undefined;
}

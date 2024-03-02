interface AddVehicleConfigRequest {
  vehicleType: string;
  vehicleName: string;
  seatAmount: number;
  seatConfig: {
    seat: "string";
    coach: "string";
  }[];
}

interface VehicleModel {
  vehicleConfigId: string;
  vehicleType: string;
  vehicleName: string;
  seatAmount: number;
}

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

export const VehicleType: { [key: string | number]: string } = {
  COACH: "Xe khách",
  CAR: "Xe Con",
  LIMOUSINE: "Xe Limosine"
}


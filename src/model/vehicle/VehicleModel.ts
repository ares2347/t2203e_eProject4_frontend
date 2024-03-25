interface AddVehicleConfigRequest {
  vehicleType: string,
  vehicleBrand: string,
  licensePlate: string,
  seatAmount: number,
  currentStation: string;
  photoUrl: string
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


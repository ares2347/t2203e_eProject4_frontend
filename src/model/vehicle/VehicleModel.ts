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

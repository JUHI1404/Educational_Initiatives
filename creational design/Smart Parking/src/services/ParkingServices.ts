import { ParkingLot } from "../models/ParkingLot";
import { VehicleFactory } from "../patterns/VehicleFactory";

export class ParkingService {
  private parkingLot = new ParkingLot();

  park(type: string, licensePlate: string): void {
    const vehicle = VehicleFactory.createVehicle(type, licensePlate);
    this.parkingLot.parkVehicle(vehicle);
  }

  remove(licensePlate: string): void {
    this.parkingLot.removeVehicle(licensePlate);
  }

  listParkedVehicles(): void {
    this.parkingLot.listVehicles();
  }
}

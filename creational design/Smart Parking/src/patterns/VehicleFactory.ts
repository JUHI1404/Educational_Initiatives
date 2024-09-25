import { Car, Bike, Vehicle } from "../models/Vehicle";

export class VehicleFactory {
  static createVehicle(type: string, licensePlate: string): Vehicle {
    switch (type) {
      case 'car':
        return new Car(licensePlate);
      case 'bike':
        return new Bike(licensePlate);
      default:
        throw new Error("Vehicle type not supported");
    }
  }
}

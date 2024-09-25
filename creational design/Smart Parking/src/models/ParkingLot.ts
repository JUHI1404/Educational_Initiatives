import { Vehicle } from "./Vehicle";

export class ParkingLot {
  private parkedVehicles: Vehicle[] = [];

  parkVehicle(vehicle: Vehicle): void {
    this.parkedVehicles.push(vehicle);
    console.log(`${vehicle.getLicensePlate()} parked.`);
  }

  removeVehicle(licensePlate: string): void {
    this.parkedVehicles = this.parkedVehicles.filter(
      (vehicle) => vehicle.getLicensePlate() !== licensePlate
    );
    console.log(`${licensePlate} removed.`);
  }

  listVehicles(): void {
    console.log('Current parked vehicles:');
    this.parkedVehicles.forEach((vehicle) => {
      console.log(vehicle.getLicensePlate());
    });
  }
}

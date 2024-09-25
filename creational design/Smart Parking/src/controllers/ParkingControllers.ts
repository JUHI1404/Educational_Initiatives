import { ParkingService } from "../services/ParkingServices";
import { Validator } from "../utils/Validator";

export class ParkingController {
  private parkingService = new ParkingService();

  handleParking(type: string, licensePlate: string): void {
    if (Validator.validateVehicle(type, licensePlate)) {
      this.parkingService.park(type, licensePlate);
    } else {
      console.log("Invalid input");
    }
  }

  handleRemoval(licensePlate: string): void {
    if (Validator.validateLicensePlate(licensePlate)) {
      this.parkingService.remove(licensePlate);
    } else {
      console.log("Invalid license plate");
    }
  }

  handleListVehicles(): void {
    this.parkingService.listParkedVehicles();
  }
}

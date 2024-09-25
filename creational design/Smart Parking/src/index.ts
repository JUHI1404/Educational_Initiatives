// src/index.ts
import { ParkingController } from "./controllers/ParkingControllers";

const parkingController = new ParkingController();


parkingController.handleParking('car', 'ABC123');
parkingController.handleParking('bike', 'XYZ789');
parkingController.handleListVehicles();
parkingController.handleRemoval('ABC123');
parkingController.handleListVehicles();

export class Validator {
    static validateVehicle(type: string, licensePlate: string): boolean {
      const validTypes = ['car', 'bike'];
      return validTypes.includes(type) && licensePlate.length > 0;
    }
  
    static validateLicensePlate(licensePlate: string): boolean {
      return licensePlate.length > 0;
    }
  }
  
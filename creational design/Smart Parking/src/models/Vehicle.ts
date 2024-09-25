export interface Vehicle {
    getLicensePlate(): string;
  }
  
  export class Car implements Vehicle {
    constructor(private licensePlate: string) {}
  
    getLicensePlate(): string {
      return this.licensePlate;
    }
  }
  
  export class Bike implements Vehicle {
    constructor(private licensePlate: string) {}
  
    getLicensePlate(): string {
      return this.licensePlate;
    }
  }
  
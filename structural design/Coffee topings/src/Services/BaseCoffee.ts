import { Coffee } from "../models/Coffee";  

export class BasicCoffee implements Coffee {
  getCost(): number {
    return 5;
  }

  getDescription(): string {
    return "Basic Coffee";
  }
}
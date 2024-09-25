import { Coffee } from "../models/Coffee";

export class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 2; // Add cost for milk
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Milk";
  }
}
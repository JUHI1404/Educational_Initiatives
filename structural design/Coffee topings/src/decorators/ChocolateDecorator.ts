import { Coffee } from "../models/Coffee";

export class ChocolateDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 3; // Add cost for chocolate
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Chocolate";
  }
}
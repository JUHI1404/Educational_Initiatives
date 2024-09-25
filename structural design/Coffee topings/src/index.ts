import { MilkDecorator } from "./decorators/MilkDecorator";
import { ChocolateDecorator } from "./decorators/ChocolateDecorator";
import { BasicCoffee } from "./Services/BaseCoffee";

let coffee = new BasicCoffee();
console.log(coffee.getDescription() + ": $" + coffee.getCost());

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription() + ": $" + coffee.getCost());

coffee = new ChocolateDecorator(coffee);
console.log(coffee.getDescription() + ": $" + coffee.getCost());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MilkDecorator_1 = require("./decorators/MilkDecorator");
const ChocolateDecorator_1 = require("./decorators/ChocolateDecorator");
const BaseCoffee_1 = require("./Services/BaseCoffee");
let coffee = new BaseCoffee_1.BasicCoffee();
console.log(coffee.getDescription() + ": $" + coffee.getCost());
coffee = new MilkDecorator_1.MilkDecorator(coffee);
console.log(coffee.getDescription() + ": $" + coffee.getCost());
coffee = new ChocolateDecorator_1.ChocolateDecorator(coffee);
console.log(coffee.getDescription() + ": $" + coffee.getCost());

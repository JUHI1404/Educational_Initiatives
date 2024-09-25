"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 2; 
    }
    getDescription() {
        return this.coffee.getDescription() + ", Milk";
    }
}
exports.MilkDecorator = MilkDecorator;

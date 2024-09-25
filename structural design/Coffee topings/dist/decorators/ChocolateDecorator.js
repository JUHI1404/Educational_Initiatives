"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChocolateDecorator = void 0;
class ChocolateDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 3; 
    }
    getDescription() {
        return this.coffee.getDescription() + ", Chocolate";
    }
}
exports.ChocolateDecorator = ChocolateDecorator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollContext = void 0;
class PayrollContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    calculatePay(hoursWorked, payRate) {
        return this.strategy.calculatePay(hoursWorked, payRate);
    }
}
exports.PayrollContext = PayrollContext;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyPayrollStrategy = void 0;
class HourlyPayrollStrategy {
    calculatePay(hoursWorked, payRate) {
        return hoursWorked * payRate;
    }
}
exports.HourlyPayrollStrategy = HourlyPayrollStrategy;

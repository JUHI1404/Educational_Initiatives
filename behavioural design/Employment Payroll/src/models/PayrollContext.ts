import { PayrollStrategy } from "../interfaces/PayrollStrategy";

export class PayrollContext {
    private strategy: PayrollStrategy;

    constructor(strategy: PayrollStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PayrollStrategy) {
        this.strategy = strategy;
    }

    calculatePay(hoursWorked: number, payRate: number): number {
        return this.strategy.calculatePay(hoursWorked, payRate);
    }
}

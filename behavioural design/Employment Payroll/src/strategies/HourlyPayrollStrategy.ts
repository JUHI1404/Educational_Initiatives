import { PayrollStrategy } from "../interfaces/PayrollStrategy";

export class HourlyPayrollStrategy implements PayrollStrategy {
    calculatePay(hoursWorked: number, payRate: number): number {
        return hoursWorked * payRate;
    }
}

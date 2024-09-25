import { PayrollStrategy } from "../interfaces/PayrollStrategy";

export class SalariedPayrollStrategy implements PayrollStrategy {
    calculatePay(hoursWorked: number, payRate: number): number {
        return payRate;  
    }
}

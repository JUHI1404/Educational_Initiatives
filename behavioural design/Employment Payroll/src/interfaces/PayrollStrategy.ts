export interface PayrollStrategy {
    calculatePay(hoursWorked: number, payRate: number): number;
}

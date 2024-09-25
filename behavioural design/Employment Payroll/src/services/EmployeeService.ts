import { PayrollContext } from "../models/PayrollContext";
import { HourlyPayrollStrategy } from "../strategies/HourlyPayrollStrategy";
import { SalariedPayrollStrategy } from "../strategies/SalariedPayrollStrategy";

export class EmployeeService {
    payrollContext: PayrollContext;

    constructor() {
        this.payrollContext = new PayrollContext(new HourlyPayrollStrategy());
    }

    calculateHourlyEmployeePay(hoursWorked: number, payRate: number) {
        return this.payrollContext.calculatePay(hoursWorked, payRate);
    }

    calculateSalariedEmployeePay(salary: number) {
        this.payrollContext.setStrategy(new SalariedPayrollStrategy());
        return this.payrollContext.calculatePay(0, salary);
    }

}

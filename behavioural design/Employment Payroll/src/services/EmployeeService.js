"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const PayrollContext_1 = require("../models/PayrollContext");
const HourlyPayrollStrategy_1 = require("../strategies/HourlyPayrollStrategy");
const SalariedPayrollStrategy_1 = require("../strategies/SalariedPayrollStrategy");
class EmployeeService {
    constructor() {
        this.payrollContext = new PayrollContext_1.PayrollContext(new HourlyPayrollStrategy_1.HourlyPayrollStrategy());
    }
    calculateHourlyEmployeePay(hoursWorked, payRate) {
        return this.payrollContext.calculatePay(hoursWorked, payRate);
    }
    calculateSalariedEmployeePay(salary) {
        this.payrollContext.setStrategy(new SalariedPayrollStrategy_1.SalariedPayrollStrategy());
        return this.payrollContext.calculatePay(0, salary);
    }
}
exports.EmployeeService = EmployeeService;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeService_1 = require("./services/EmployeeService");
const Logger_1 = require("./utils/Logger");
const runPayroll = () => __awaiter(void 0, void 0, void 0, function* () {
    const employeeService = new EmployeeService_1.EmployeeService();
    try {
        const employeeType = yield Logger_1.Logger.askQuestion("Enter Employee Type (hourly/salaried): ");
        if (employeeType === "hourly") {
            const hoursWorked = parseFloat(yield Logger_1.Logger.askQuestion("Enter hours worked: "));
            const hourlyRate = parseFloat(yield Logger_1.Logger.askQuestion("Enter hourly rate: "));
            Logger_1.Logger.log("Calculating pay for hourly employee...");
            const hourlyPay = employeeService.calculateHourlyEmployeePay(hoursWorked, hourlyRate);
            Logger_1.Logger.log(`Hourly Employee Pay: ${hourlyPay}`);
        }
        else if (employeeType === "salaried") {
            const salary = parseFloat(yield Logger_1.Logger.askQuestion("Enter salary: "));
            Logger_1.Logger.log("Calculating pay for salaried employee...");
            const salariedPay = employeeService.calculateSalariedEmployeePay(salary);
            Logger_1.Logger.log(`Salaried Employee Pay: ${salariedPay}`);
        }
        else {
            Logger_1.Logger.error("Invalid employee type.");
        }
    }
    catch (error) {
        Logger_1.Logger.error("An error occurred while calculating payroll.");
    }
    finally {
        Logger_1.Logger.closeInput();
    }
});
runPayroll();

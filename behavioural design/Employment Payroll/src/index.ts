import { EmployeeService } from "./services/EmployeeService";
import { Logger } from "./utils/Logger";

const runPayroll = async () => {
    const employeeService = new EmployeeService();

    try {
        const employeeType = await Logger.askQuestion("Enter Employee Type (hourly/salaried): ");

        if (employeeType === "hourly") {
            const hoursWorked = parseFloat(await Logger.askQuestion("Enter hours worked: "));
            const hourlyRate = parseFloat(await Logger.askQuestion("Enter hourly rate: "));
            Logger.log("Calculating pay for hourly employee...");
            const hourlyPay = employeeService.calculateHourlyEmployeePay(hoursWorked, hourlyRate);
            Logger.log(`Hourly Employee Pay: ${hourlyPay}`);
        } else if (employeeType === "salaried") {
            const salary = parseFloat(await Logger.askQuestion("Enter salary: "));
            Logger.log("Calculating pay for salaried employee...");
            const salariedPay = employeeService.calculateSalariedEmployeePay(salary);
            Logger.log(`Salaried Employee Pay: ${salariedPay}`);
        } else {
            Logger.error("Invalid employee type.");
        }

    } catch (error) {
        Logger.error("An error occurred while calculating payroll.");
    } finally {
        Logger.closeInput();
    }
};

runPayroll();

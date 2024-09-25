import { FacultyObserver } from "./models/FacultyObserver";
import { ScheduleSubject } from "./models/ScheduleSubject";
import { Logger } from "./utils/Logger";
import { askQuestion, closeInput } from "./utils/Input";

const manageFacultySchedule = async () => {
    const scheduleSubject = new ScheduleSubject();

    const facultyCount = parseInt(await askQuestion("Enter number of faculty to notify: "));

    for (let i = 1; i <= facultyCount; i++) {
        const facultyName = await askQuestion(`Enter name of faculty ${i}: `);
        const observer = new FacultyObserver(facultyName);
        scheduleSubject.attach(observer);
    }

    Logger.log("All faculty members attached as observers.");

    const schedule = await askQuestion("Enter the new schedule: ");
    Logger.log("Setting new schedule...");
    scheduleSubject.setSchedule(schedule);

    const swapDecision = await askQuestion("Do you want to swap schedules? (yes/no): ");
    if (swapDecision.toLowerCase() === "yes") {
        const schedule1 = await askQuestion("Enter first schedule to swap: ");
        const schedule2 = await askQuestion("Enter second schedule to swap: ");
        Logger.log("Swapping schedules...");
        scheduleSubject.swapSchedule(schedule1, schedule2);
    }

    closeInput();
};

manageFacultySchedule();

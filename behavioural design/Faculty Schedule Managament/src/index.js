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
const FacultyObserver_1 = require("./models/FacultyObserver");
const ScheduleSubject_1 = require("./models/ScheduleSubject");
const Logger_1 = require("./utils/Logger");
const Input_1 = require("./utils/Input");
const manageFacultySchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    const scheduleSubject = new ScheduleSubject_1.ScheduleSubject();
    const facultyCount = parseInt(yield (0, Input_1.askQuestion)("Enter number of faculty to notify: "));
    for (let i = 1; i <= facultyCount; i++) {
        const facultyName = yield (0, Input_1.askQuestion)(`Enter name of faculty ${i}: `);
        const observer = new FacultyObserver_1.FacultyObserver(facultyName);
        scheduleSubject.attach(observer);
    }
    Logger_1.Logger.log("All faculty members attached as observers.");
    const schedule = yield (0, Input_1.askQuestion)("Enter the new schedule: ");
    Logger_1.Logger.log("Setting new schedule...");
    scheduleSubject.setSchedule(schedule);
    const swapDecision = yield (0, Input_1.askQuestion)("Do you want to swap schedules? (yes/no): ");
    if (swapDecision.toLowerCase() === "yes") {
        const schedule1 = yield (0, Input_1.askQuestion)("Enter first schedule to swap: ");
        const schedule2 = yield (0, Input_1.askQuestion)("Enter second schedule to swap: ");
        Logger_1.Logger.log("Swapping schedules...");
        scheduleSubject.swapSchedule(schedule1, schedule2);
    }
    (0, Input_1.closeInput)();
});
manageFacultySchedule();

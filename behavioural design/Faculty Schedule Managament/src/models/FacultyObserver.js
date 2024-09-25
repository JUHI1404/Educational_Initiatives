"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyObserver = void 0;
class FacultyObserver {
    constructor(name) {
        this.name = name;
    }
    update(schedule) {
        console.log(`Notification to ${this.name}: New schedule is ${schedule}`);
    }
}
exports.FacultyObserver = FacultyObserver;

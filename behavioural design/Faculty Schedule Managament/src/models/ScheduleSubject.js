"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleSubject = void 0;
class ScheduleSubject {
    constructor() {
        this.observers = [];
        this.schedule = "";
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    setSchedule(schedule) {
        this.schedule = schedule;
        this.notifyObservers();
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.schedule);
        }
    }
    swapSchedule(schedule1, schedule2) {
        console.log(`Swapping schedules: ${schedule1} <=> ${schedule2}`);
        this.notifyObservers();
    }
}
exports.ScheduleSubject = ScheduleSubject;

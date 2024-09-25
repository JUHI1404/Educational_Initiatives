import { FacultyObserver } from "./FacultyObserver";

export class ScheduleSubject {
    private observers: FacultyObserver[] = [];
    private schedule: string = "";

    attach(observer: FacultyObserver): void {
        this.observers.push(observer);
    }

    detach(observer: FacultyObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    setSchedule(schedule: string): void {
        this.schedule = schedule;
        this.notifyObservers();
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.schedule);
        }
    }

    swapSchedule(schedule1: string, schedule2: string): void {
        console.log(`Swapping schedules: ${schedule1} <=> ${schedule2}`);
        this.notifyObservers();
    }
}

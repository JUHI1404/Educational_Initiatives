export class FacultyObserver {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(schedule: string): void {
        console.log(`Notification to ${this.name}: New schedule is ${schedule}`);
    }
}

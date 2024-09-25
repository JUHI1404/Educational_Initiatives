
import { RoomObserver } from '../observers/RoomObserver';

class Sensor {
  private observers: RoomObserver[] = [];

  constructor(public type: string) {}

  addObserver(observer: RoomObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: RoomObserver) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(isActive: boolean) {
    this.observers.forEach((observer) => observer.update(isActive));
  }

 
  activate() {
    console.log(`${this.type} sensor activated`);
    this.notifyObservers(true);
  }

 
  deactivate() {
    console.log(`${this.type} sensor deactivated`);
    this.notifyObservers(false);
  }
}

export default Sensor;

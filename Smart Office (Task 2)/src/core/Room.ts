
import { RoomObserver } from '../observers/RoomObserver';

class Room {
  private observers: RoomObserver[] = [];
  
  public id!: number;
  public maxCapacity!: number;
  public currentOccupancy: number = 0;
  private bookings: Map<string, number> = new Map(); 

  constructor(id: number, maxCapacity: number) {
    this.id = id;
    this.maxCapacity = maxCapacity;
  }

  setOccupancy(occupancy: number) {
    this.currentOccupancy = occupancy;
    this.notifyObservers();
  }

  addObserver(observer: RoomObserver) {
    this.observers.push(observer);
  }

  private notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  
  isBooked(startTime: string, duration: number): boolean {
    const endTime = this.calculateEndTime(startTime, duration);
    for (const [time, dur] of this.bookings.entries()) {
      const bookedEndTime = this.calculateEndTime(time, dur);
      if (startTime < bookedEndTime && endTime > time) {
        return true; 
      }
    }
    return false; 
  }

  
  book(startTime: string, duration: number) {
    this.bookings.set(startTime, duration);
  }

  
  private calculateEndTime(startTime: string, duration: number): string {
    const [hours, minutes] = startTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + duration;
    const endHours = Math.floor(totalMinutes / 60) % 24; 
    const endMinutes = totalMinutes % 60;
    return `${String(endHours).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')}`;
  }
}


export default Room;

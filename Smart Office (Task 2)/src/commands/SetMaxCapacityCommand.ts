import Office from '../core/Office';
import Room from '../core/Room';

class SetMaxCapacityCommand {
  constructor(private roomId: number, private capacity: number) {}

  execute(): void {
    const room: Room | undefined = Office.getInstance().getRoom(this.roomId);
    if (room) {
      room.maxCapacity = this.capacity; // Assuming Room class has maxCapacity
      console.log(`Room ${this.roomId} maximum capacity set to ${this.capacity}.`);
    } else {
      console.error(`Room ${this.roomId} does not exist.`);
    }
  }
}

export default SetMaxCapacityCommand;

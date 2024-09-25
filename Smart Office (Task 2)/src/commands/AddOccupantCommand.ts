import Office from '../core/Office';
import { Command } from './Command';

class AddOccupantCommand implements Command {
  constructor(private roomId: number, private occupants: number) {}

  execute(): void {
    const room = Office.getInstance().getRoom(this.roomId);
    if (!room) {
      console.error(`Room ${this.roomId} not found.`);
      return;
    }

    if (room.currentOccupancy + this.occupants > room.maxCapacity) {
      console.error(`Room ${this.roomId} occupancy insufficient to mark as occupied.`);
      return;
    }

    room.setOccupancy(room.currentOccupancy + this.occupants);
    console.log(`Room ${this.roomId} is now occupied by ${room.currentOccupancy} persons. AC and lights turned on.`);
  }
}

export default AddOccupantCommand;

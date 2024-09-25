import Office from '../core/Office';

class ConfigRoomCommand {
  constructor(private roomCount: number) {}

  execute(): void {
    for (let i = 1; i <= this.roomCount; i++) {
      Office.getInstance().addRoom(i, 10); // Default capacity for now
    }
    console.log(`Office configured with ${this.roomCount} meeting rooms: Room 1, Room 2, Room 3.`);
  }
}

export default ConfigRoomCommand;

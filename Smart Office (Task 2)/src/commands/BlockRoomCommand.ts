import Office from '../core/Office'; 

class BlockRoomCommand {
  constructor(private roomId: number, private startTime: string, private duration: number) {}

  execute() {
    const room = Office.getInstance().getRoom(this.roomId); 

    if (!room) {
      console.log(`Room ${this.roomId} does not exist.`);
      return;
    }

    if (room.isBooked(this.startTime, this.duration)) {
      console.log(`Room ${this.roomId} is already booked during this time. Cannot book.`);
      return;
    }

    room.book(this.startTime, this.duration);
    console.log(`Room ${this.roomId} booked from ${this.startTime} for ${this.duration} minutes.`);
  }
}

export default BlockRoomCommand;

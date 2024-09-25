import Office from '../core/Office';
import Room from '../core/Room';

class CancelBookingCommand {
  constructor(private roomId: number) {}

  execute(): void {
    const room: Room | undefined = Office.getInstance().getRoom(this.roomId);
    if (!room || !room.isBooked()) {
      console.error(`Room ${this.roomId} is not booked. Cannot cancel booking.`);
      return;
    }

    room.cancelBooking();
    console.log(`Booking for Room ${this.roomId} cancelled successfully.`);
  }
}

export default CancelBookingCommand;

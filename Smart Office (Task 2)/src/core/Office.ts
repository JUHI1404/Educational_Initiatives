import Room from './Room';

class Office {
  private static instance: Office;
  private rooms: Map<number, Room> = new Map();

  private constructor() {}

  public static getInstance(): Office {
    if (!Office.instance) {
      Office.instance = new Office();
    }
    return Office.instance;
  }

  public addRoom(id: number, maxCapacity: number) {
    this.rooms.set(id, new Room(id, maxCapacity));
  }

  public getRoom(id: number): Room | undefined {
    return this.rooms.get(id);
  }


  public listRooms(): void {
    this.rooms.forEach((room) => {
      console.log(`Room ${room.id}, Capacity: ${room.maxCapacity}`);
    });
  }
}

export default Office;

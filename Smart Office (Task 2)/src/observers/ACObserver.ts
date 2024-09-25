import { RoomObserver } from './RoomObserver';

class ACObserver implements RoomObserver {
  update(isOccupied: boolean): void {
    console.log(isOccupied ? 'AC is ON' : 'AC is OFF');
  }
}

export default ACObserver;

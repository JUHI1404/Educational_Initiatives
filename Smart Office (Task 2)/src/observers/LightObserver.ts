import { RoomObserver } from './RoomObserver';

class LightObserver implements RoomObserver {
  update(isOccupied: boolean): void {
    console.log(isOccupied ? 'Lights are ON' : 'Lights are OFF');
  }
}

export default LightObserver;

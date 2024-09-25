import Room from '../core/Room';

export interface RoomObserver {
  update(room: Room): void;  

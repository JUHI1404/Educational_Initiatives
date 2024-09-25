import Office from './core/Office';
import ConfigRoomCommand from './commands/ConfigRoomCommand';
import SetMaxCapacityCommand from './commands/SetMaxCapacityCommand';
import AddOccupantCommand from './commands/AddOccupantCommand';
import BlockRoomCommand from './commands/BlockRoomCommand';
import CancelBookingCommand from './commands/CancelBookingCommand';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const office = Office.getInstance();

  const configRooms = new ConfigRoomCommand(3);
  configRooms.execute();

  const setCapacity = new SetMaxCapacityCommand(1, 10);
  setCapacity.execute();

  const addOccupant = new AddOccupantCommand(1, 2);
  addOccupant.execute();

 
  const blockRoom = new BlockRoomCommand(1, '09:00', 60);
  blockRoom.execute();

 
  const cancelBooking = new CancelBookingCommand(1);
  cancelBooking.execute();

  const removeOccupant = new AddOccupantCommand(1, 0);
  removeOccupant.execute();

 
  const invalidBlockRoom = new BlockRoomCommand(1, '09:00', 60);
  invalidBlockRoom.execute(); 

  const cancelNonExistent = new CancelBookingCommand(2);
  cancelNonExistent.execute(); 

  const insufficientOccupancy = new AddOccupantCommand(2, 1);
  insufficientOccupancy.execute();

  const nonExistentRoom = new AddOccupantCommand(4, 2);
  nonExistentRoom.execute();

  const invalidRoomNumber = new BlockRoomCommand(0, '09:00', 60); 
  invalidRoomNumber.execute(); // Invalid room number

  const invalidCapacity = new SetMaxCapacityCommand(1, -5);
  invalidCapacity.execute(); 

  rl.close();
}

main();

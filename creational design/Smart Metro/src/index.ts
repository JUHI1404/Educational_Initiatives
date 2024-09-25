import { MetroScheduler } from "./services/MetroScheduler";


const metroScheduler = MetroScheduler.getInstance();


metroScheduler.addMetro({ metroName: "Metro A", departureTime: "08:30" });
metroScheduler.addMetro({ metroName: "Metro B", departureTime: "09:00" });


const leaveTime = metroScheduler.calculateLeaveTime("Metro A", 15); 
if (leaveTime) {
  console.log(`You should leave home by: ${leaveTime}`);
}

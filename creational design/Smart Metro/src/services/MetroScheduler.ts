// src/services/MetroScheduler.ts
import { MetroStation, Metro } from "../models/Metro";
import { TimeUtils } from "../utils/TimeUtils";

export class MetroScheduler {
  private static instance: MetroScheduler;
  private station: MetroStation;
  private walkingTimeInMinutes: number;

  private constructor() {
    this.station = new MetroStation();
    this.walkingTimeInMinutes = 10; 
  }

  // Ensures only one instance exists
  public static getInstance(): MetroScheduler {
    if (!MetroScheduler.instance) {
      MetroScheduler.instance = new MetroScheduler();
    }
    return MetroScheduler.instance;
  }

  addMetro(metro: Metro): void {
    this.station.addMetro(metro);
  }

  
  calculateLeaveTime(metroName: string, travelDurationToMetro: number): string | null {
    const metros = this.station.getMetros();
    const metro = metros.find((m) => m.metroName === metroName);

    if (!metro) {
      console.log("Metro not found!");
      return null;
    }

    const leaveTime = TimeUtils.calculateLeaveTime(metro.departureTime, travelDurationToMetro);
    return leaveTime;
  }
}

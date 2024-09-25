
export class TimeUtils {
    static calculateLeaveTime(departureTime: string, travelDuration: number): string {
      const [hour, minute] = departureTime.split(':').map(Number);
  
      const totalDepartureMinutes = hour * 60 + minute;
  
      
      const totalLeaveTimeMinutes = totalDepartureMinutes - travelDuration;
  
     
      const leaveHour = Math.floor(totalLeaveTimeMinutes / 60);
      const leaveMinute = totalLeaveTimeMinutes % 60;
  
      return `${String(leaveHour).padStart(2, '0')}:${String(leaveMinute).padStart(2, '0')}`;
    }
  }
  
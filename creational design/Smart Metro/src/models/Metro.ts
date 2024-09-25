export interface Metro {
    metroName: string;
    departureTime: string; 
  }
  
  export class MetroStation {
    private availableMetros: Metro[] = [];
  
    addMetro(metro: Metro): void {
      this.availableMetros.push(metro);
    }
  
    getMetros(): Metro[] {
      return this.availableMetros;
    }
  }
  
// JavaScript code​​​​​​‌‌‌​​‌‌‌‌​‌​​‌‌​‌​​‌​‌‌‌‌ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;

class WeatherStation {
  constructor() {
    this.observers = new Set();
    this.temperature = null;
    this.displayNames = new Map();
  }

  // Your code begins here.
  //why set the displayName as well as the display when the displayName is part of the display.
  addObserver(display, displayName){
    if (display && display instanceof WeatherDisplay){
        this.observers.add(display.boundUpdate);
        this.displayNames.set(displayName,display.boundUpdate);
        return `Weather Station: ${displayName} subscribed to the weather station.`;
    } else{
        console.log(`${display} isn't a valid display object`)
    }
  }

  removeObserver(display){
    if (display && display instanceof WeatherDisplay){
        const obsDelete = this.observers.delete(display.boundUpdate);
        const dnDelete = this.displayNames.delete(display.displayName);
        if(obsDelete && dnDelete){
            return `Weather Station: ${display.displayName} unsubscribed from the weather station.`;
        } else {
            return `Unable to remove display ${display.displayName}`
        }

    } else {
        console.log(`${display} isn't a valid display object`)
    }
  }

  notifyObservers(){
    //note I just use the displayNames map, and not the observer set. Not sure what the intention was
    const names = this.displayNames.keys();
    for (const dn of names){
        this.displayNames.get(dn)(this.temperature,dn);
    };
  }

  // Your code ends here.

  setTemperature(newTemperature) {
    this.temperature = newTemperature;
    this.notifyObservers();
    return `Weather station: New temperature is ${newTemperature}°C`;
  }
}

class WeatherDisplay {
  constructor(displayName) {
    this.displayName = displayName;
    this.boundUpdate = this.update.bind(this);
  }

  update(temperature, displayName) {
    console.log(
      `Weather display ${displayName} shows temperature: ${temperature}°C`
    );
  }
}

export { WeatherDisplay, WeatherStation };
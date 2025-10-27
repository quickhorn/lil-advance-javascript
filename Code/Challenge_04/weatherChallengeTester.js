import { WeatherDisplay, WeatherStation } from "./weatherChallenge.js";

// This is how your code will be called.
// You can edit this code to try different testing cases.
function runWeatherStation() {
    // Create weather station and displays
    const weatherStation = new WeatherStation();
    const display1 = new WeatherDisplay("Display 1");
    const display2 = new WeatherDisplay("Display 2");
    const results = [];
  
    // Subscribe displays to weather station
    results.push(weatherStation.addObserver(display1, display1.displayName));
    results.push(weatherStation.addObserver(display2, display2.displayName));
    // Set temperature and notify observers
    results.push(weatherStation.setTemperature(25));
    results.push(weatherStation.setTemperature(28));
    // Unsubscribe display 1
    results.push(weatherStation.removeObserver(display1));
    results.push(weatherStation.setTemperature(22));
    results.push(weatherStation.setTemperature(58));
  
    return results;
  }
  
  const result = runWeatherStation();
  
  console.log(result);
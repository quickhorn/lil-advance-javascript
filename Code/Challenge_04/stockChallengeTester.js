import { PriceDisplay, PriceThresholdNotifier, PercentageChangeNotifier, Stock, reports } from "./stockChallenge.js";

// This is how your code will be called.
// You can edit this code to try different testing cases.
const stock = new Stock("ABC");

const priceDisplay = new PriceDisplay();
const priceThresholdNotifier = new PriceThresholdNotifier(150);
const percentageChangeNotifier = new PercentageChangeNotifier(5);

stock.addObserver(priceDisplay);
stock.addObserver(priceThresholdNotifier);
stock.addObserver(percentageChangeNotifier);

//-100 should be an error, as a stock can't be valued at a negative number, but the LIL challenge test expects this to be handled.
const priceArray = [100, 102, 151, -100, "aaa", "200"];

priceArray.forEach((price) => stock.updatePrice(price));

stock.removeObserver(priceThresholdNotifier);
stock.removeObserver(percentageChangeNotifier);

priceArray.forEach((price) => stock.updatePrice(price));

const result = reports;

console.log(result);
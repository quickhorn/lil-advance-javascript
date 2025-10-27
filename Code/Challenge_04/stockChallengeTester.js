// This is how your code will be called.
// You can edit this code to try different testing cases.
const stock = new Stock("ABC");

const priceDisplay = new PriceDisplay();
const priceThresholdNotifier = new PriceThresholdNotifier(150);
const percentageChangeNotifier = new PercentageChangeNotifier(5);

stock.addObserver(priceDisplay);
stock.addObserver(priceThresholdNotifier);
stock.addObserver(percentageChangeNotifier);

const priceArray = [100, 102, 151, -100, "aaa", "200"];

priceArray.forEach((price) => stock.updatePrice(price));

stock.removeObserver(priceThresholdNotifier);
stock.removeObserver(percentageChangeNotifier);

priceArray.forEach((price) => stock.updatePrice(price));

const result = reports;
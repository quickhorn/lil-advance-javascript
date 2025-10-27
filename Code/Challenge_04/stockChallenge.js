// JavaScript code​​​​​​‌‌‌​​‌‌‌‌​‌​‌​​‌‌‌‌‌​​​​‌ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.


let reports = [];

class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// Your code starts here.
class Stock extends Observable {
    constructor(stockName, stockPrice){
        super();
        this.stockName = stockName;
        this.stockPrice = stockPrice;
    }

    updatePrice(price){
        if (Number.isFinite(price)){
            this.stockPrice = price;
            this.notify(this);
        } else{
            reports.push(`Error: Invalid price data '${price}' for ${this.stockName}. Price must be a number.`)
        }
    }
}

class PriceDisplay{
    update(data){
        reports.push(`Price Display: ${data.stockName} stock price is now $${data.stockPrice}`);  
    }
}

class PriceThresholdNotifier{
    constructor(thresholdPrice){
        this.thresholdPrice = thresholdPrice;
    }

    update(data){
        if (data.stockPrice >= this.thresholdPrice){
            //if we have already set a price, let's check it
            reports.push(`Price Threshold Notifier: ${data.stockName} stock price has reached the threshold of $${this.thresholdPrice}`);
        }
    }
}

class PercentageChangeNotifier{
    constructor(percentageThreshold){
        this.currentPrice = null;
        this.percentageThreshold = percentageThreshold;
    }

    update(data){
        if (this.currentPrice){
            //do the percentage comparison
            const changePercentage = (data.stockPrice - this.currentPrice) / this.currentPrice * 100;
            if (Math.abs(changePercentage) > this.percentageThreshold){
                reports.push(`Percentage Change Notifier: ${data.stockName} stock price has changed by ${changePercentage.toFixed(2)}%`);
            }
        }  
        this.currentPrice = data.stockPrice;
    }
}

export { Stock, PriceDisplay, PriceThresholdNotifier, PercentageChangeNotifier, reports}

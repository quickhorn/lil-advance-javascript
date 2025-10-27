// JavaScript code​​​​​​‌‌‌​​‌‌‌‌​‌​‌​​‌‌‌‌‌​​​​‌ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

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
    constructor(stockName,stockPrice){
        this.stockName = stockName;
        this.stockPrice = stockPrice;
    }
}

class PriceDisplay{

}

class PriceThresholdNotifier{

}

class PercentageChangeNotifier{

}

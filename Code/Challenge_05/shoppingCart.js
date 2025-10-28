// JavaScript code​​​​​​‌‌‌​​‌‌‌‌‌​​‌​​​​​​‌‌​‌‌​ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;


const runningTally = [];

// Reactive Object
class ReactiveObject {
  constructor() {
    this.subscribers = [];
  }

  // Subscribe to changes
  subscribe(callback) {
    // Add callback to subscribers
    this.subscribers.push(callback);
  }

  // Unsubscribe from changes
  unsubscribe(callback) {
    // Remove the callback from subscribers
    this.subscribers = this.subscribers.filter((sub) => sub !== callback);
  }

  updateSubscribers() {
    this.subscribers.forEach((callback) => callback(this));
  }
}

// Your code begins here.

// Your code ends here.

const cart = new ShoppingCart();

const tallyCart = (cart) => {
  const tally = {
    totalBeforeTax: cart.totalBeforeTax.toFixed(2),
    gst: cart.gst.toFixed(2),
    pst: cart.pst.toFixed(2),
    sumTotal: cart.sumTotal.toFixed(2),
  };
  
  runningTally.push(tally);
};
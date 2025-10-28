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
class ShoppingCart extends ReactiveObject{
    constructor(){
        super();
        this.items = [];
        this.gst = 0;
        this.pst = 0;
        this.sumTotal = 0;
        this.totalBeforeTax = 0;
    }

    addItem(item){
        //we should probably do some validation here, but don't overengineer.
        this.items.push(item);
        this.#updateTotals();
    }

    removeItem(index){
        this.items.splice(index,1);
        this.#updateTotals();
    }

    #updateTotals(){
          this.totalBeforeTax = this.items.reduce((sum, item) => sum + item.price, 0);
          this.gst = this.totalBeforeTax * GST_RATE;
          this.pst = this.totalBeforeTax * PST_RATE;
          this.sumTotal = this.totalBeforeTax + this.gst + this.pst;
          this.updateSubscribers();
    }
}
// Your code ends here.

const cart = new ShoppingCart();

const tallyCart = (c) => {
  const tally = {
    totalBeforeTax: c.totalBeforeTax.toFixed(2),
    gst: c.gst.toFixed(2),
    pst: c.pst.toFixed(2),
    sumTotal: c.sumTotal.toFixed(2),
  };
  
  runningTally.push(tally);
};

//DG pulled in the tester code because it was highly interdependant. 

// This is how your code will be called.

// You can edit these tax rates to try different testing cases.
var GST_RATE = 0.05; // 5% GST
var PST_RATE = 0.07; // 7% PST

// You can edit this array to try different testing cases.
const itemArray = [
  { name: "Item 1", price: 19.99 },
  { name: "Item 2", price: 29.99 },
  { name: "Item 3", price: 5.29 },
  { name: "Item 4", price: 9.99 },
];


// Subscribe to changes
cart.subscribe(tallyCart);

// Iterate through itemArray and add items to the cart
itemArray.forEach((item) => cart.addItem(item));

// Remove first item from the cart
try {
  cart.removeItem(0);
} catch (error) {
  console.error(error);
}

// Unsubscribe from changes
cart.unsubscribe(tallyCart);

// These items should not be counted.
itemArray.forEach((item) => cart.addItem(item));

console.log("Number of cart updates: ", runningTally.length);

const result = runningTally;

console.log(result);

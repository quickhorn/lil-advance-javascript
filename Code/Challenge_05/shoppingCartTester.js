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

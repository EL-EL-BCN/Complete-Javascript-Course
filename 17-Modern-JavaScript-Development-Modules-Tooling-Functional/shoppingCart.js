// shoppingCart.js: Exporting Module

// Blocking code top level await
// console.log('Start Fetching Users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fecthing users');

const shippingCost = 10;
export const cart = [];

// Export Named
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qty };

// Export default
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

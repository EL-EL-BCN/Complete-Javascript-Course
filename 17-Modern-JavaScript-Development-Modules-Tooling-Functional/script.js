// script.js: Importing module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
// addToCart('bread', 5);
// ShoppingCart.addToCart('bread', 5);
// console.log(price, qty);
// console.log(ShoppingCart.totalPrice, ShoppingCart.qty);

// Import Default
//import add from './shoppingCart.js';
// add('pizza', 2);

// Mixing named and default imports
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('tomatoes', 4);
console.log(cart);

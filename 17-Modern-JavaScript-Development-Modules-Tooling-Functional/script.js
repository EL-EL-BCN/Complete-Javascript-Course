// script.js: Importing module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
// addToCart('bread', 5);
// ShoppingCart.addToCart('bread', 5);
// console.log(totalPrice, qty);
// console.log(ShoppingCart.totalPrice, ShoppingCart.qty);

// Import Default
//import add from './shoppingCart.js';
// add('pizza', 2);

// Mixing named and default imports
// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('tomatoes', 4);
// console.log(cart);

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
///// The module pattern /////
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

/*
///// Common JS Modules /////
// Export
export.addToCart = function (product, quantity) {
   cart.push({ product, quantity });
   console.log(
     `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
   );
};
// import
const {addToCart} = require('./shoppingCart.js');
*/

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

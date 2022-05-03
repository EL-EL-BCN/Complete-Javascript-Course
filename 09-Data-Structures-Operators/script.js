'use strict';

// DESTRUCTURING AN ARRAY EXAMPLE 1

/* 
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// Above we have an array that holds values 2, 3, and 4. WE can destructure it by declaring a const variable for each position in the array, but this is not very efficient.

const [x, y, z] = arr;
// We can also destructure an array like this, declaring all the variables in one line.

console.log(a, b, c);
console.log(x, y, z);
// Note that destructuring an array does not destory it, we are only reading what is in the array.

// DESTRUCTURING AN ARRAY EXAMPLE 2

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

*/

// DESTRUCTURING AN ARRAY EXAMPLE 3

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, , secondary] = [secondary, , main];
// console.log(main, secondary);

// DESTRUCTURING AN ARRAY EXAMPLE 4 - USING A FUNCTION

/*

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

*/

/*

// DESTRUCTURING AN ARRAY EXAMPLE 5 - FROM NESTED ARRAY

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// DESTRUCTURING AN ARRAY EXAMPLE 6 - DEFAULT VALUES

// const [p, q, r] = [8, 9];
// console.log(p, q, r);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

/*

// DESTRUCTURING AN OBJECT EXAMPLE 1

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

*/

// DESTRUCTURING AN OBJECT EXAMPLE 2 - MUTATING VARIABLES

/* 

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

*/

// DESTRUCTURING AN OBJECT EXAMPLE 2 - NESTED OBJECT

/*

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { openingHours } = restaurant;
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/

/*

// DESTRUCTURING AN OBJECT EXAMPLE 2 - DE-STRUCTURING FUNCTION

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});


*/

/*

// DESTRUCTURING AN OBJECT EXAMPLE 3 - DE-STRUCTURING FUNCTION WITH DEFAULT VALUES

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del Sole, 21',
  starterIndex: 2,
});

*/

/*

// THE SPREAD OPERATOR

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

const newArr = [1, 2, arr];
console.log(newArr);

console.log(...goodNewArr);


*/

/*

// USING THE SPREAD OPERATOR TO INSERT INTO EXISTING ARRAY

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// append to new copy of array
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Itterables: Arrays, Strings, Maps, Sets, NOT Objects
const str = 'jonas';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);

*/

// USING THE SPREAD OPERATOR - EXAMPLE 1

/* 
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

*/

/*

// USING THE SPREAD OPERATOR - SINCE ES6 2016 RELEASE THE SPREAD OPERTOR WORKS ON OBJECTS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);


*/

/*

// THE SPREAD OPERATOR CAN BE USED TO CLONE AN OBJECT

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/*

// REST PATTERNS AND PARAMETERS - INTRODUCTION

// SPREAD operator. it is on the RIGHT side of the =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST operator. It is on the LEFT side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

*/

/*

// REST PATTERNS AND PARAMETERS - EXAMPLE 1 - ARRAYS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, otherFood);

*/

/*

// REST PATTERNS AND PARAMETERS - EXAMPLE 2 - OBJECTS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

*/

/*

// REST PATTERNS AND PARAMETERS - EXAMPLE 3 - FUNCTIONS

const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const add2 = function (...numbers2) {
  let sum = 0;
  for (let i = 0; i < numbers2.length; i++) sum += numbers2[i];
  console.log(sum);
};
add2(2, 3);
add2(5, 3, 7, 2);
add2(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add2(...x);

*/

/*

// REST PATTERNS AND PARAMETERS - EXAMPLE 4 - FUNCTIONS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderPizza('mushroom', 'Onions', 'olives', 'spinach');

restaurant.orderPizza('tomatoes');

*/

/*

// SHORT CIRCUITING (&& and ||)

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// restaurant.numGuests2 = 23;
const guests2 = restaurant.numGuests2 ? restaurant.numGuests2 : 10;
console.log(guests2);

const guests3 = restaurant.numGuests || 10;

console.log(3 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

/*

// NULLISH COALESCING OPERATOR

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.numGuests2 = 0;
const guestsCorrect = restaurant.numGuests2 ?? 10;
console.log(guestsCorrect);

*/

/*

// LOGICAL ASIGNMENT OPERATOR OR

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Logical Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH COALESCING OPERATOR
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// LOGICAL ASIGNMENT OPERATOR AND
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// can be shortened to
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

*/

// CODING CHALLENGE #1

/*
We are building a football betting app.

Supose we gt data from a webservice about a certain game (see object below). In this challenge we are going to work with data.

Tasks:
1. create one player array for each team, (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For bayern Munich (team1) create one variable ('gk') with the goalkeepers name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, bayern Munich (team1) used 3 substitute players so create a new array called ('playersFinal') containing all the origional players plus 'Thiago', 'Coutinho', and 'Peisic'.

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that recieves an arbitary number of players names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win WITHOUT using and if/else statement or the ternary operator.

TEST DATA FOR 6: use players 'Davies', 'Muller', 'Lewandowski' and 'Kimich'. Then, call the function again with players from game.scored.
 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. method 1
// const players1 = game.players[0];
// const players2 = game.players[1];
// 1. destructuring method
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Peisic'];
console.log(playersFinal);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

*/

/*

// FOR OF LOOP

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

*/

/*

// ES6 ENHANCED OBJECT LITORALS - VARIABLE

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // before ES6 Enhanced object litorals
  // openingHours: openingHours,

  // After ES6 Enhanced object litorals
  openingHours,
};

*/

/*

// ES6 ENHANCED OBJECT LITORALS - FUNCTIONS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

*/

/*

// ES6 ENHANCED OBJECT LITORALS CAN NOW COMPUTE

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

console.log(openingHours);

*/

/*

// OPTIONAL CHAINING EXAMPLE 1

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//console.log(restaurant.openingHours.mon);
//console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.thu) console.log(restaurant.openingHours.thu.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.thu?.open);

// OPTIONAL CHAINING EXAMPLE 2

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? 'Closed';
  console.log(`On ${day} we are open at ${open}`);
}

*/

/*

// OPTIONAL CHAINING EXAMPLE 3 - METHODS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

*/

/*

// OPTIONAL CHAINING EXAMPLE 4 - ARRAYS

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'user array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

*/

/*

///// Looping objects: Object keys, Values & Entries /////

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// PROPERTY NAMES
// We can look at the object keys for opening hours
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

// We can loop over the object.keys
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// PROPERTY VALUES
const values = Object.values(openingHours);
// console.log(values);

// Entries object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

///// Coding Challenge #2 /////

/*
Lets continue with the football betting app.

Tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console.

3. Print the three odds to the console, but in a nice formatted way, exactly like this:
odd of victory Bayern Munich: 1.33
odd of draw: 3.25
odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for draw). HINT: note how the odds and the game objects have the same property names.

BONUS: Create an object calld 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game it will look like this:
 {
   Gnarby: 1
   Hummels: 1
   Lewandowski: 2
 }
*/

/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

*/

/*

///// SETS - INTRODUCED IN ES6 /////

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

console.log(ordersSet[0]);

// ordersSet.clear();
// console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

*/

/* 

///// MAPS - INTRODUCED IN ES6 /////

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed:(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
console.log(rest);

console.log(rest.size);

// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);

console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

*/

/*

const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct🏆'],
  [false, 'try again!'],
]);

console.log(question);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to an array
// console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/* 

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);

//3
const avgEvents = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avgEvents} minutes`);

// or
const time = [...gameEvents.keys()].pop();
// console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

4; //
for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}

// or

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

*/

/*

///// WORKING WITH STRINGS /////

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

// An airline has seats that are numbered with row number then letter for the column or position. I.e. 11A, 11B, Isle, 11C, 11D, 11E, 11F. Where B and E are middle seats.
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat😮');
  else console.log('You got lucky 😊');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalisation in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Regular expression
console.log(announcement.replace(/door/g, 'gate'));

// booleans
const airplane = 'A320neo';
console.log(airplane.includes('A320'));
console.log(airplane.includes('Boeing'));

const aircraft = 'Airbus A320neo';
console.log(aircraft.startsWith('Air'));
console.log(aircraft.startsWith('Ab'));

if (aircraft.startsWith('Airbus') && aircraft.endsWith('neo')) {
  console.log('Part of the NEW Airbus Family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('I have socks and a camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, LastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalseName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalseName('jessica ann smith davies');
capitalseName('jonas schmedtmann');

// Padding
const message = 'Go to Gate 23!';
console.log(message.padStart(20, '+'));
console.log('Jonas'.padStart(20, '+'));
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, '*');
};

console.log(maskCreditCard('4321765469762144'));
console.log(maskCreditCard('432176546976217886544'));
console.log(maskCreditCard('43217654697625675817886544'));

// repeat
const messageRepeat = 'Bad Wather... All departures delayed... ';
console.log(messageRepeat.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(4);
planesInLine(10);

*/

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// add event listner to the text area
document.querySelector('button').addEventListener('click', function () {
  // get the contents of text area and put it in a variable
  const text = document.querySelector('textarea').value;
  // split the contents of the text area into seperate rows
  const rows = text.split('\n');
  // iterate over each row and de-structure the two words removing the underscore
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // capitalise the second word first letter
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log output and append with counting green ticks emoji
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Task: Transform above string into below output
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// a function to slice the first three characters of the string and uppercase them.
const getCode = str => str.slice(0, 3).toUpperCase();

// Break down string dividing it by the plus symbol
for (const flight of flights.split('+')) {
  // deconstruct into array the string splitting it by the semi colon
  const [type, from, to, time] = flight.split(';');
  // build output string.
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

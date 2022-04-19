'use strict';

/*

// SCOPING EXAMPLE 1

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // firstname is a global variable but is available to this function via the scope chain.
  console.log(firstName);
  return age;
}

const firstName = 'Jonas';

calcAge(1991);

// Const age is not available in the global scope because it is declared in the calc age function and scope does not look down.
console.log(age);
// script.js:15 Uncaught ReferenceError: age is not defined at script.js:15:13



// SCOPING EXAMPLE 2

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // Within the function printAge we are calling variables age and birth year from outside the function. THey are accessible because the scoping is looking up to the parent scoping.
  function printAge() {
    const output = `You are ${age} born in ${birthYear}`;
    console.log(output);
  }
  printAge();
}

const firstName = 'Jonas';
calcAge(1991);



// SCOPING EXAMPLE 3

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age} born in ${birthYear}`;
    console.log(output);
  }
  printAge();
}

const firstName = 'Jonas';
calcAge(1991);
// Here we are in the outer scope and so cannot access the variable of age or function of printAge.
// console.log(age); script.js:57 Uncaught ReferenceError: age is not defined at script js:57:13
//printAge(); // script.js:58 Uncaught ReferenceError: printAge is not defined at script.js:58:1



// SCOPING EXAMPLE 4

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // Scope lookup is going up two levels to the global scope to find variable firstName
    const output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
  }
  printAge();
}

const firstName = 'Jonas';
calcAge(1991);



// SCOPING EXAMPLE 5

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, ${firstName}, you are a milenial!`;
      // We can access the str variable here because it has block scope.
      console.log(str);
    }

  }
  printAge();
}

const firstName = 'Jonas';
calcAge(1991);



// SCOPING EXAMPLE 6

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, ${firstName}, you are a milenial!`;
    }
    // We cannot access the str variable here because Str has block scope and we are out of the block.
    console.log(str);
    // script.js:116 Uncaught ReferenceError: str is not defined
    // at printAge (script.js:116:17)
    // at calcAge (script.js:118:3)
    // at script.js:122:1
    // CONST AND LET VARIABLES ARE BLOCK SCOPED
  }
  printAge();
}

const firstName = 'Jonas';
calcAge(1991);


// SCOPING EXAMPLE 7

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, ${firstName}, you are a millenial!`;
      var millenial = true;
    }
    console.log(millenial);
    // VAR VARIABLES ARE FUNCTION SCOPED so can can be called within the function because it is within scope.
  } // End of function printAge

  printAge();
}

const firstName = 'Jonas';
calcAge(1991);



// SCOPING EXAMPLE 8

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, ${firstName}, you are a millenial!`;
      var millenial = true;

      function add(a, b) {
        return a + b;
      } // End of function add
    } // End of function printAge
    console.log(millenial);
    console.log(add(2, 3));
    // Uncaught ReferenceError: add is not defined at
    // printAge (script.js:171:13)
    // at calcAge (script.js:174:3)
    // at script.js:178:1
    // printAge @ script.js:171
    // calcAge @ script.js:174
    // (anonymous) @ script.js:178
    // We cannot call the function add from outside of the function print age because scope does not look down.
    // HOWEVER, IF WE DISSABLE STRICT MODE IT IS ABLE TO CALL FUNCTION ADD!!!!!
  }

  printAge();
}

const firstName = 'Jonas';
calcAge(1991);



// SCOPING EXAMPLE 7

function calcAge(birthYear) {
   const age = 2037 - birthYear;
 
   function printAge() {
     const output = `${firstName}, You are ${age} born in ${birthYear}`;
     console.log(output);
     if (birthYear >= 1981 && birthYear <= 1996) {
       const str = `oh, ${firstName}, you are a millenial!`;
       var millenial = true;
     } // End of If
     console.log(millenial);
     // VAR VARIABLES ARE FUNCTION SCOPED so can can be called within the function because it is within scope.
   } // End of function printAge
 
   printAge();
 } // End of function printAge
 
 const firstName = 'Jonas';
 calcAge(1991);



// SCOPING EXAMPLE 8

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      const str = `oh, ${firstName}, you are a millenial!`;
      var millenial = true;
      console.log(str);
      // oh, Steven, you are a millenial!
      // Variable str is looking in local scope for variable firstName. It finds it first within the block scope of the if and no longer needs to look up to continue searching for firstname. JavaScript uses the first instance that it finds.
      // it is fine to have the same variable or function with different values within the scope.

      function add(a, b) {
        return a + b;
      } // End of function add
    } // End of If
  } // End of function printAge

  printAge();
} // End of function calcAge

// Global Scope
const firstName = 'Jonas';
calcAge(1991);



// SCOPING EXAMPLE 9

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      const str = `oh, ${firstName}, you are a millenial!`;
      var millenial = true;
      console.log(str);

      function add(a, b) {
        return a + b;
      } // End of function add

      // Here we redefine variable output within the inner scope of the if where the variable is initially declared.
      output = 'NEW OUTPUT!';
    } // End of If
    console.log(output);
    // script.js:253 Jonas, You are 46 born in 1991
    // script.js:258 oh, Steven, you are a millenial!
    // script.js:267 NEW OUTPUT!
    // Note that 'Jonas, You are 46 born in 1991' is the result from the first time we declared the variable output on line 253!
    // Note that 'NEW OUTPUT!' is from the second time we changed the variable value on line 265.
    // This is fine to have the same variable name store different values at diferent points in our code because the first declaration is from within the outer scope of the printAge function. The second time we give the output variable the new value of 'NEW OUTPUT!' is from the inner scope of the if statement.
  } // End of function printAge

  printAge();
} // End of function calcAge

// Global Scope
const firstName = 'Jonas';
calcAge(1991);



// SCOPING EXAMPLE 10

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // ----- Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      //
      const str = `oh, ${firstName}, you are a millenial!`;
      var millenial = true;
      console.log(str);

      function add(a, b) {
        return a + b;
      } // End of function add
      //
      // ----- Reasigning outer scope's variable
      output = 'NEW OUTPUT!';
      //
    } // End of If
    console.log(output);
  } // End of function printAge

  printAge();
} // End of function calcAge

// Global Scope
const firstName = 'Jonas';
calcAge(1991);


// HOISTING EXAMPLE 1 - HOISTING WITH VARIABLES

console.log(me);
// console.log(job);
console.log(year);

var me = 'jonus';
let job = 'teacher';
const year = 1991;

/*
Above We are trying to use the three types of veriable before they were defined

for var variable we get: undefined script.js:324 

for let variable we get: Uncaught ReferenceError: Cannot access 'job' before initialization at script.js:324:13

for const variable we get: Uncaught ReferenceError: Cannot access 'year' before initialization at script.js:325:13

This is because of how hoisting works on the different types of variables.
var variables are hoisted but have function scope and are Undefined.

for let and const they are not hoisted but remain in a TDZ until the code reaches the point where they are declared.



// HOISTING EXAMPLE 2 - HOISTING WITH FUNCTIONS

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
// console.log(addExpr2(2, 3));
console.log(addArrow2(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExpr2 = function (a, b) {
  return a + b;
};

var addArrow2 = (a, b) => a + b;



when we try to call the function addDecl before it is declared it works and we get 5.

When we try to call the expression addExpr before it is declared we get an error:
Uncaught ReferenceError: Cannot access 'addExpr' before initialization at script.js:349:13

When we try to call the arrow function before it is declared we get an error:
Uncaught ReferenceError: Cannot access 'addArrow' before initialization at script.js:350:13

const and let are not hoisted and are uninitialized, remaining in TDZ 

if we try and call an expression created with a var variable we get a different error:
Uncaught TypeError: addExpr2 is not a function at script.js:351:13

Same case if we try and call an arrow function before it is declared:
Uncaught TypeError: addArrow2 is not a function at script.js:352:13

Any variables declared with var are hoisted but as undefined.

Conclusions: The only function that can be called before declaring it is a function declaration.



// HOISTING EXAMPLE 3 - HOISTING PITFALL

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

/*

In the above example we have a function which would delete the contents of the shopping cart. In the case of this example it just console.logs but the concept is there.

we are declaring the numProducts variable and setting it to 10.

so before the numProducts variable is declared and before the deleteShoppingCart is declared we are performing some if logic. That is if shopping cart numProducts is null or zero (!numProducts) then execute the function to delete shopping cart.

However becauase of the the way var variables are hoisted the numProducts variable is hoised with a value of undefined, which is a falsey value, not 10, so the if logic takes the shopping cart to be empty and deletes it when in fact it has 10 items!

Conslusion: 
1. Do not use var to declare variables. use const or let.
2. Declare variables at the top of the function or expression or arrow function so they do not end up in the dead zone.

*/

/*

// HOISTING EXAMPLE 4

var x = 1;
let y = 2;
const z = 3;


*/

/*

// THIS KEYWORD EXAMPLE 1 - FUNCTION and ARROW FUNCTION

//1.
console.log(this);

const calcAge = function (birthYear) {
  //2.
  console.log(2037 - birthYear);
  // 3.
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  //4.
  console.log(2037 - birthYear);
  // 5.
  console.log(this);
};

calcAgeArrow(1980);

/*

1. From line 434, the this keyword refers to the global object which is the window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

2. In example 2 we see that ther is no this keyword and it returns 46.

3. From script.js:440 it returns undefined. THis is because we are in strict mode. If we were in non strict mode (sloppy mode) it would also call the global object of the window.

4. Now we have an arrow function. Here there is no this keyword attached so when we call the calcAgeFunction with a value of 1980 it just calculates the age.

5. However, An arrow function does not get its own this keyword but inherits it from its surrounding function - lexical this. In the case above the arrow is not surrounded by a function but its parent is the global scope so the this inherits the window object.

*/

/*

// THIS KEYWORD EXAMPLE 2 - WITHIN A METHOD

const jonas = {
  year: 1991,
  calcAge: function () {
    // 1.
    console.log(this);
    // 2.
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

/*

1. when we have a method call the this keyword will be the object that is calling the method. jonas is calling the method therfore this is jonas.

{year: 1991, calcAge: ƒ}
calcAge: ƒ ()
year: 1991
[[Prototype]]: Object


2. The this keyword points to the object that is calling it. In this case the calcAge function is calling this on the object of jonas and so is able to use the year from the object jonas which is outside of the function calcAge. WE do not need to pass in the year into the calcAge function when we call it because by using the this keyword we can find year from the jonas object. 

*/

/*

// THIS KEYWORD EXAMPLE 3 - THIS KEYWORD POINTS TO THE OBJECT CALLING THE METHOD

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

const matilda = {
  year: 2017,
};

// 1.
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// 2.
const f = jonas.calcAge;
f();

/*
1. here matilda.calcAge is equal to jonas.calcAge.
When we call the method matilda.CalcAge the this keyword points to the object calling it, in this case matilda who has a year of 2017 so it calculates 2037 - 2017 and console.log's 20.

Note that the this keyword console logs the object that called it: {year: 2017, calcAge: ƒ}

2. we have a variable called f which is equal to the object jonas.calcAge
If we call the f function, the this keyword is undefined.

Uncaught TypeError: Cannot read properties of undefined (reading 'year')
    at calcAge (script.js:507:29)
    at script.js:521:1

if we look at what f is in the console

ƒ () {
    console.log(this);
    console.log(2037 - this.year);
  }

WE see that it is just the function of calcAge in the jonas object. 

THis happens because the f function is just a regular function call with no owner so the this keyword does not apply.

*/

/*

// THIS KEYWORD EXAMPLE 4 - REGULAR FUNCTIONS VS ARROW FUNCTIONS

// 2.
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  // 1.
  greet: () => console.log(`hey ${this.firstName}`),
  // 3.
  greet2: function () {
    console.log(`hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.greet2();

/*

1. When we use this in an arrow function it inherits the this from the surrounding function. In this case the surrounding function is global object of window which does not contain fistName so it is undefined.
hey undefined script.js:564
Note that we do not get a javascript error message but an undefined. 

2. This can be particularly dangerous when we use var because the var will get put on the global object.
hey Matilda script.js:564
window is the this keyword insode the arrow function.

WE SHOULD NEVER USE AN ARROW FUNCTION AS A METHOD, EVEN IF NOT USING THE THIS KEYWORD.

3. If we define it as a regular function then the this keyword works!
hey Jonas script.js:567

*/

/*

// THIS KEYWORD EXAMPLE 5 - PITFALL OF A FUNCTION INSIDE OF A METHOD

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    /* const isMellenial = function () {
      console.log(this);
      // 1.
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMellenial(); */

/*

    const self = this;
    const isMellenial2 = function () {
      console.log(this);
      // 2.
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMellenial2();

    // 3.
    const isMellenial3 = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMellenial3();
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

/*

1. The this keyword is undefined within the regular function call within the method.

script.js:604 Uncaught TypeError: Cannot read properties of undefined (reading 'year')
    at isMellenial (script.js:604:24)
    at Object.calcAge (script.js:606:5)
    at script.js:623:7

This is a rule that a regular function call of this keyword has the this keyword set to undefined.

2. we can solve this by creating a variable called self outside of the function and referencing it to this. This will then be defined in the scope chain. The self veraible can now be used inside the function.

4. A simpler solution is to use an arrow function which does not get it's own this keyword but inherits it from its parent scope, the jonas object.

*/

// THIS KEYWORD EXAMPLE 6 - ARGUMENTS EXPRESSION

/*

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(100, 101, 102, 103);
/*

when we log the arguments keyword we get an array of the two paramaters we are calling the function with. 

script.js:656 
Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]

This is usefull if we want to pass in more paramters than we defined in the function.
Arguments(4) [2, 5, 6, 8, callee: (...), Symbol(Symbol.iterator): ƒ]

The arrow function however does not get the arguments keyword.

script.js:663 Uncaught ReferenceError: arguments is not defined
    at addArrow (script.js:663:15)
    at script.js:666:1

We get an error. 

The point is that regular functions have the keyword arguments where as arrow functions do not.

This is not that important in modern javascript because we have a beterway nowdays to pass in more functions.



// PRIMATIVES VS METHODS

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('friend:', friend);
console.log('me', me);

*/

// Primative types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// We cannot assign a new blank object to married Jessica because it will be a new object in the heap with a new memory address.
// const jessica = {};
/*
// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davies';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/

/*
Now we see that by using Object.assign to copy the object we preserve all the data of the origional and we can then overwrite in the coppied object.

Before marriage: {firstName: 'Jessica', lastName: 'Williams', age: 27}
script.js:746 After marriage: {firstName: 'Jessica', lastName: 'Davies', age: 27}

JessicaCopy is a new memory address in the heap. THe origional jessica2 is also in the heap at the origional memory address.


*/

// HOWEVER THERE IS STILL A PROBLEM. THIS OBJECT:ASIGN ONLY CREATES A SHALLOW COPY.

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  children: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davies';
jessicaCopy.children.push('Mary');
jessicaCopy.children.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

/*
Before marriage: {firstName: 'Jessica', lastName: 'Williams', age: 27, children: Array(4)}
script.js:774 After marriage: {firstName: 'Jessica', lastName: 'Davies', age: 27, children: Array(4)}

We se that object jessica two contains an array of two children. After marriage JessicaCopy now has two more children.

But when we log jessica2 and JessicaCopy both children arrays have 4 children.
Object.assign is a shallow copy, Not a deep clone because the origional object also recives any changes made on the copy.

Both Jessica2 and JessicaCopy have an object of a children array which point to the same memory in the heap, not a different heap memory.


*/

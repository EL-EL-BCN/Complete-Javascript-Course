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

*/

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

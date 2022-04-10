'use strict';

/* 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio';
// const private = 1;
const if = 10;



// Calling / running / invoking the function
function logger() {
    console.log('my name is Jonus');
}

logger();
logger();
logger();



function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 2);
console.log(orangeJuice);

const mixedJuice = fruitProcessor(1, 1);
console.log(mixedJuice);

const age3 = calcAge1(1991);
console.log(age3);

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// const age4 = calcAge2(1991);
// console.log(age4);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age5 = calcAge3(1991);
console.log(age5);



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



// The fruit dicer chops fruit into four chunks
function diceFruit(fruit) {
    return fruit * 4;
}

// The fruit processor can only make juice from diced fruit
function fruitProcessor(apples, oranges) {
    const dicedApple = diceFruit(apples);
    const dicedOrange = diceFruit(oranges);
    const juice = `juice with ${dicedApple} chunks of apple and ${dicedOrange} orange chunks.`;
    return juice;
}

console.log(fruitProcessor(2, 5));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} is already Retured`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Bob'));

// Function Declaration
function calcAge (birthYear) {
    return 2037 - birthYear;
}

// Function Expression
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function
const calcAge = birthYear => 2037 - birthYear;


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

/* 
Coding Challenge 1+

Back to the two gymnastics teams, THe dolphins and the Koalas! There is a new jymnastics discipline which works differently.
Each team competes 3 times, and then the average score is calculated (So one average score per team).
A team only wins if it has at least DOUBLE the average score of the other team. Otherwise no team wins.

1. Create an arrow function 'calcAverage' to calculate the average of three scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as prameters (avgDolphins' and 'avgKoalas') then logs the winner to the console, together with the victory points acording the the rule above. i.e. Koalas wins (30 vs 13).
4. Use the 'checkWinner' function to determine the winner for both data 1 and Data 2.
5. Ignore draws this time.

Test data 1: Dolphins 44, 23, 71, Koalas 65, 54, 49.
Test data 2: Dolphins 85, 54, 41, Koalas 23, 34, 27.


const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;

// Test 1
let avgScoreDolphins = calcAverage(44, 23, 71);
let avgScoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins`);
    }
}

checkWinner(avgScoreDolphins, avgScoreKoalas);

// Test 2
avgScoreDolphins = calcAverage(85, 54, 41);
avgScoreKoalas = calcAverage(23, 34, 27);
checkWinner(avgScoreDolphins, avgScoreKoalas);

*/

/// INTRODUCTION TO ARRAYS ///

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Create array using litoral syntax
const friendArr = ['Michael', 'Steven', 'Peter'];
console.log(friendArr);

// Create array using the inbuilt array function
const yearsArr = new Array(1991, 1984, 2008, 2020);
console.log(yearsArr);

// retrieve a value from within the array
console.log(friendArr[0], yearsArr[2]);

// To determine array length
console.log(friendArr.length);

// To get the last value from the array
console.log(friendArr[friendArr.length-1]);

// Mutate array by replacing Peter with Jay
friendArr[2] = 'Jay';
console.log(friendArr);

// We cannot overwrite the contents of the entire array
// friendArr = ['Bob', 'Alice'];

// We can populate an array with any data type. string, number etc..
const personArr = ['Jonas', 'Schmedtmann', 2037-1991];
console.log(personArr);

// We can insert variables into an array
const firstName = 'Jonas';
const lastname = 'Schmedtmann';
const age = 2037-1991;
const varArr = [firstName, lastname, age];
console.log(varArr);

// An array can be inserted into an array
const profession = 'teacher';
const multiArr = [firstName, lastname, age, profession, friendArr];
console.log(multiArr);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearArr = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yearArr[0]);
const age2 = calcAge(yearArr[1]);
const age3 = calcAge(yearArr[yearArr.length-1]);
console.log(age1, age2, age3);

const agesArr = [calcAge(yearArr[0]), calcAge(yearArr[2]), (yearArr[yearArr.length-1])];
console.log(agesArr);



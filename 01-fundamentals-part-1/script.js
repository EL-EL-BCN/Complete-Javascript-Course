/*

// let js = 'amazing';
// if (js === 'amazing')
//     alert("Javascript is fun!");

// console.log(40 + 8 + 23 - 10);


let js = 'amazing';
console.log(40 + 9 + 23 - 10);

console.log("Jonas");
console.log(23);

// The above are three types of value

let fistName = "Bob";

// Here we can assign a value to a variable

console.log(fistName);
console.log(fistName);
console.log(fistName);

// We can use a variable multiple times in our code

// Conventions and rules for naming variables
// We use cammel case. i.e. the first letter of each word after the first is capitalised with no spaces. i.e firstName, lastName, dateOfBirth etc...

// Javascript has illegal variable names
// i.e. let 3years = 3; Variable names cannot start with a number. Variable names can only have letters, numbers, underscores and dolar signs.

// Javascript also has reserved keywords such as new. let new = 27; so they would also be illegal variable names. Another axample would be let function = 27;

// let name = "Jonas"; name is a reserved keyword but javascript allows variables called name but it may cause problems later on. Better to use firstName.

let myFirstJob = "coder";
let myCurrentJob = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);


let country = "Spain";
let continent = "Europe";
let population = "47 mil";

console.log("My country is " + country + " with a population of " + population + " in the continent of " + continent);

let firstName = "John"; // String
let personAge = 23; // Number
let isMember = true; // boolean

console.log(typeof firstName);
console.log(typeof personAge);
console.log(typeof isMember);


// javascriptIsFun variable initially is Boolean but changes to string.
let javascriptIsFun = true;
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// Undefined variable
let year; // when we declare an undefined variable it will hold the value of undefined! And also have the type of Undefined.
console.log(year);
console.log(typeof year);

year = 1992;
console.log(typeof year);

console.log(typeof null); // Note that null is not null in JS because of a legacy bug, it shows as object!



let age = 30;
age = 31;

const birthYear = 1992;
// birthYear = 1999; // const is immutable so it cannot be changed later. This will produce a JS error - Uncaught TypeError: Assignment to constant variable.

// const job; // Const variables must have a value when declared or a js error will be produced - Uncaught SyntaxError: Missing initializer in const declaration.

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 is two to the power of three

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

// assignment opperators
let x = 10 + 5;
console.log(x);

x += 10; // x = x + 10
console.log(x);

x *= 4 // x = x * 4
console.log(x);

x /= 4 // x = x / 5
console.log(x);

x++ // increment x by 1
console.log(x);

x-- // decrease x by 1
console.log(x);

x -= 4 // x = x - 4
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // greater than
console.log(ageJonas < ageSarah); // less than
console.log(ageSarah >= 18); // greater than or equal to
console.log(ageSarah <= 18); // less than or equal to

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y; // two undefined variables declared
x = y = 25 - 10 - 5;
console.log(x, y);

// Asignment operator of equals has a precedence of 3.
// mathmatical operator of minus has a precedence of 12 with left to right reading.

// Javascript will execute the highest precedence operators first, minus from left to right, i.e. in this order 25 - 10 - 5. in this case equals with a lower precedence is executed second.

// Note that in the MDN precedence table values in brackets have the highest precedence and so are executed first.

const averageAge = ageJonas + ageSarah / 2;
console.log(averageAge);
// to calculate average age we take two age alues and add them togther then divide by two.
// But what operation will happen first?
// the divide operator has precedence of 13 and the addition 12 so the divide will be executed first. In this example the output will be ageJonas plus half of Sarahs age which s not the correct average!

const averageAge2 = (ageJonas + ageSarah) / 2;
console.log(averageAge2);
// This is the correct method because now the addition is in brackets with a precedence of 21 so this will be execute forst before the division with a precedence of 12.

*/

// Coding challenge

/* Mark and Jonh are trying to compare their BMI (body mass index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
mass in Kg and height in m.

1 Store mark and John's mass and height in variables.
2 calculate both their BMIs using the formula.
create a boolean variable markHigherBMI

Test data 1: Mark 78kg 1.69m, John 92kg 1.95m.
Test data 2: Mark 95kg 1.88m, John 85kg 1.76m.


// METHOD 1

// John
let mass = 92;
let height = 1.95;
const johnBmi = mass / height ** 2;

// mark
mass = 78;
height = 1.69;
const markBmi = mass / height ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

// John
mass = 85;
height = 1.76;
const johnBmi2 = mass / (height * height);

// mark
mass = 95;
height = 1.88;
const markBmi2 = mass / (height * height);
const markHigherBMI2 = markBmi2 > johnBmi2;
console.log(markHigherBMI2);



// METHOD 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
const markHigherBmi = BMIMark > BMIJohn;
console.log(markHigherBMI);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;
const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);
const markHigherBmi2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);



// Strings and Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// Template Litoral
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`)

// Using backticks to output multiple lines
console.log('string with \n\ multiple \n\ lines');
// without backticks we use \n\ to denote new line

console.log(`string
multiple
lines`);
// with backticks we just denote a new line by enter.

const age = 17;

if (age >= 18) {
    console.log(`Sarah can start learning to drive🚗`);
} else {
    yearsLeft = 18 - age;
    console.log(`Sarah can't start learning to drive for ${yearsLeft} year 🛴`);
}
// Note Emojis are fond by using windows key and dot.


// const birthyear = 1991;
// if (birthyear <= 2000) {
//     let century = 20;
// } else {
//     /   let century = 21;
// }

// console.log(century);
// Note that the variable century is defined within the if else code block and so will produce an error if we try to call it outside the if else code block. Uncaught ReferenceError: century is not defined

// so we first need to define an empty variable outside of the if else block to be able to call century outside of the if else statement.

const birthyear = 2001;
let century;

if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


/*
Coding test 2

Use the BMI example from before and improve it.

1) print a nice output to the console saying who has the higher BMI. The message can be either "Mark's BMI is higher than John´s!" or vica versa.

2) Use a template string to include the BMI values in the outputs. "Mark's BMI (value) is higher than John´s (value)!" or visa versa

use an if else statement.


let stmt;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    stmt = `Mark's BMI (${BMIMark}) is higher than John´s (${BMIJohn})!`
} else {
    stmt = `John's BMI (${BMIJohn}) is higher than mark´s (${BMIMark})!`
}
console.log(stmt);



// Type Conversion and Coercion
const inputYear = "1991";
// The year is a strin not a number because it is in quotes.

console.log(inputYear + 18);
// This will concatinate to give output of 199118.

console.log(Number(inputYear) + 18);
// Number will convert the string to a number

console.log(Number("Jonas"));
// The output is NaN - Not a Number

console.log(typeof String(23));
// String will convert a number into a string

console.log('I am ' + 23 + ' years old');
// Type coercion - here javacript is automattically treating 23 as a string.

console.log("23" - "10" - 3);
// here Javascript is doing automatic type conversion from string to number to output 10.

console.log("23" * "2");
// Coercion of both strings.

let n = "1" + 1;
n = n - 1;
console.log(n);
// JavaScript does type coercion to string so “1” + “1” will be 11. Now n with a value of 11 is treated as a number so the output will be 10.

let x = 2 + 3 + 4 + "5";
console.log(x);
// JavaScript will treat 2 +3 + 4 as a number giving a value of 9 then concatenate the 5 onto string 9 -> “95”

let y = "10" - "4" - "3" - 2 + "5";
console.log(y);
// JavaScript will treat 10 - 4 - 3 as a number giving a value of 1 then concatenate the 1 onto string 5 -> “15”



// Truthy values and falsy Values

console.log(Boolean(0)); // False
console.log(Boolean(undefined)); // False
console.log(Boolean("Jonas")); // True
console.log(Boolean({})); // True
console.log(Boolean("")); // False


const money = 100;
if (money) {
    console.log("Don´t Spend it all;)");
} else {
    console.log("You have no money!");
}

let height = 10;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is NOT defined');
}



const age = 18;
if (age === 18) console.log('You Just became an adult');
// === returns a boolean value if the results match strictly.


const age2 = "18";
if (age2 == 18) console.log('You Just became an adult');
// == returns a boolean value if the results match. Note that this is not strict so Javascript does type coercion.


const age3 = "18";
if (age3 === 18) console.log('You Just became an adult');
// === returns a boolean value if the results strictly match. Note a string and a number do not match strictly because they are different data types.


const favorite = prompt("what is your favorite number?");
console.log(favorite);

if (favorite == 23) {
    console.log('Cool! 23 is an amazing number!');
}

if (favorite === 23) {
    console.log('Cool! 23 is still an amazing number!');
}

console.log(typeof favorite);


const favorite2 = Number(prompt("what is your favorite number?"));
console.log(favorite2);

if (favorite2 === 23) {
    console.log('Cool! 23 is still an amazing number!');
}

const favorite3 = Number(prompt("what is your favorite number?"));
console.log(favorite3);


const favorite3 = Number(prompt("what is your favorite number?"));
console.log(favorite3);

if (favorite3 === 23) {
    console.log('Cool! 23 is still an amazing number!');
} else if (favorite3 === 7) {
    console.log('Cool! 7 is a lucky number!');
} else if (favorite3 === 9) {
    console.log('Cool! 9 is the square of three!');
} else {
    console.log('Number is not 7 or 23');
}

if (favorite3 !== 23) console.log('Why not 23?');



const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive!")
} else {
    console.log("someone else should drive....")
}

const isTired = true;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("someone else should drive....")
}

*/

/* Coding Challenge 3

There are two gymnast teams, Dolphins and Koalas.
They compete against each other 3 times. THe winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below.
2. Compare the teams average scores to determine th winner of the competition, and print it to the console. Don't forget that there can be a draw so test for that also.
3. BONUS a: Include a requirment for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of 100 points. HINT use a logical operator to test for a minimum score, as well as multiple elseif blocks.

Test DATA: dolphins score 96, 108 and 89, Koalas score 88, 91 and 110.
Test DATA: Bonus1 doplphins 97, 112 and 101, Koalas score 109, 95 and 101.
Test DATA: Bonus2 doplphins 97, 112 and 101, Koalas score 109, 95 and 106.

const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

// Bonus 1
const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 123;

// Bonus 2
const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 106;

const dolphinsAv = ((dolphins1 + dolphins2 + dolphins3) / 3);
const kolasaAv = ((koalas1 + koalas2 + koalas3) / 3);

if ((dolphinsAv > kolasaAv) && dolphinsAv >= 100) {
    console.log(`the winner is Dolphins with an average score of ${dolphinsAv}🏆`);
} else if ((dolphinsAv === kolasaAv) && dolphinsAv >= 100 && kolasaAv >= 100) {
    console.log(`the competition is a draw with an average score of ${dolphinsAv}🏆🏆`);
} else if ((kolasaAv > dolphinsAv) && kolasaAv >= 100) {
    console.log(`the winner is Koalas with an average score of ${kolasaAv}🏆`);
} else {
    console.log(`There is no winner because scores were below 100!`);
}


const day = "monday";

switch (day) {
    case 'monday':
        console.log('Plan Course Structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('not a valid day!');
}

const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
    console.log('Plan Course Structure');
    console.log('Go to coding meetup');
} else if (dayOfWeek === 'Tuesday') {
    console.log('Prepare theory videos');
} else if ((dayOfWeek === 'Wednesday') || (dayOfWeek === 'Thursday')) {
    console.log('write code examples');
} else if (dayOfWeek === 'Friday') {
    console.log('Record Videos');
} else if ((dayOfWeek === 'Saturday') || (dayOfWeek === 'Sunday')) {
    console.log('Enjoy the weekend');
} else {
    console.log('not a valid day!');
}



// Statements and expressions

3 + 4
True && false && !true
1991

if (23 > 10) { const str = "23 is bigger"; }

const me = 'Jonas'
console.log(`i'm ${2037 - 1991} years old and my name is ${me}`)
// variables and values are expressions and so can go inside template literal

console.log(`i'm ${if (23 > 10) { const str = "23 is bigger"; }}`)
// Statements cannot go inside a template literal


const age = 19;
age > 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water🥛');


const drink = age > 18 ? 'wine🍷' : 'water🥛';
console.log('I like to drink ' + drink)

let drink2;
if (age <= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water🥛';
}
console.log('I like to drink ' + drink2)

console.log(`I like to drink ${age > 18 ? 'wine🍷' : 'water🥛'}`);



/* 
Coding challenge 4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country it is usual to tip 15% if the bill value is between 50 and 300.
If the value is different, then the tip is 20%.

1. calculate the tip, depending on the value. Create a variable called 'tip.
Use a ternary statement.
print to the console the bill value, the tip and the total (bill + tip)
Example the bill was 275, the tip was 41.25 and the total value 316.25.

Test data for bill values 275, 40 and 430.

*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill} the tip was ${tip} and the total value ${bill + tip}`);


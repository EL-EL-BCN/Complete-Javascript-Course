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



//// ARRAY METHODS ////

// Push adds an element onto the end of the array
// Push is also a function which returns array length.
const friendArr = ['Michael', 'Steven', 'Peter'];
const newLength = friendArr.push('Jay');
console.log(friendArr);
console.log(newLength);

// unshift method adds elements to the beginning of the array
friendArr.unshift('John');
console.log(friendArr);


// Pop will remove the LAST element of the array
friendArr.pop();
console.log(friendArr);
// It does not return the length of the array but returns what was popped
const popped = friendArr.pop();
console.log(friendArr);
console.log(popped);

// SHIFT Removes First element from the array
friendArr.shift();
console.log(friendArr);
// It does not return the length of the array but returns what was shifted
const shifted = friendArr.shift();
console.log(friendArr);
console.log(shifted);

// Find index of an element in array (The position starting from zero)
console.log(friendArr.indexOf('Steven'));
// If we try and look for an element which is not in the array we will get -1 as a result.
console.log(friendArr.indexOf('Micahel'));

// Modern Es6 method for indexOf is includes which returns a boolean if element is in array
console.log(friendArr.includes('Steven'));
console.log(friendArr.includes('Micahel'));
// Includes uses strict mode so does not do type coercion
// if I add 23 as a number then try and find it as a string
friendArr.push(23);
console.log(friendArr.includes('23'));
console.log(friendArr.includes(23));

// We can use includes to write conitionals
if (friendArr.includes('Peter')) {
    console.log('you have a friend called Peter');
} else {
    console.log('Peter is not your friend');
}


/*
Coding Challenge 2

Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of bill if bill value is between 50 and 300. If the value is different the tip is 20%.

1. Write a function called 'calcTip' that takes any bill value as an input and returns the corresponding tip calculated based on the rules above. use the function type you like the most.
Test the function using a bill value of 100.

2.Now lets use arrays! Create an array 'bills' containing the test data below.

3. create an array 'tips' containing the tip value for each bill, calculated from the function created before.

4. BONUS. Create an array 'total' containing bill + tip for each bill value.

Test Data: 125, 555, 44


// 1. Calc Tip function
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
// 2. Create bills array
const billsArr = [125, 555, 44];

// 3. Create tips array
const tipsArr = [ calcTip(billsArr[0]), calcTip(billsArr[1]), calcTip(billsArr[2]) ];
console.log(tipsArr);

// 4. Create bill + tipps array
const BillTipArr = [ billsArr[0]+tipsArr[0], billsArr[1]+tipsArr[1], billsArr[2]+tipsArr[2] ];
console.log(BillTipArr);


//// INTRODUCTION TO OBJECTS ////

// here we have a person array with elements in it
// But we can only reference those elements by calling thier 
// position (starting from zero)
const personArr = [
    'Jonas', 
    'Schmedtmann', 
    2037-1991,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];
console.log(personArr);

// But we can asign an object name to each element in the array 
// using curly braces to make key value pairs

const personObj = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
}
console.log(personObj);

// The object of PersonObj has 5 properties - firstname, lastname etc...
// Using curly braces to write an object is called the object literal.

// Retrieving a value by property name from an object using dot notation
console.log(personObj.firstName);

// Retrieving a value by property name from an object using brackets
console.log(personObj['lastName']);

// using square brackets we can concatinate
const nameKey = 'Name';
console.log(personObj['first' + nameKey]);
console.log(personObj['last' + nameKey]);

// But using dot notation to compute using concatination does not work
// console.log(personObj.'last' + nameKey);


// We can use the function prompt to define a variable of what property we want to find.
// Then use the bracket notation to output the contents of the object property.
const tellMe = prompt('What do you want to know about personObj? Choose between firstName, LastName, age, job and friends');
// console.log(personObj[tellMe]);

// but what if the user enters a falsy value that is not a property?
if (personObj[tellMe]) {
    console.log(personObj[tellMe]);
} else {
    console.log('Wrong Request! Choose between firstName, LastName, age, job and friends');
}

///// ADD NEW PROPERTIES TO THE OBJECT /////

personObj.location = 'Portugal';
personObj['twitter'] = '@jonasschmedtmann';
console.log(personObj);


Challenge

'Jonus has 3 friends and his best friend is called michael'



const personObj = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
}
console.log(personObj);

// Option 1
const FistName = personObj.firstName;
const bestFriend = personObj.friends[0];
const totalFriends = personObj.friends.length;
console.log(FistName + ' Has ' + totalFriends + ' friends and his best friend is called ' + bestFriend);

// option 2
console.log(`${personObj.firstName} has ${personObj.friends.length} friends and his best friend is called ${personObj.friends[0]}`);


///// OBJECT METHODS /////

// Objects like arrays can hold different types of data, they can even hold arrays. THey can even hold objects inside of objects. Functions are just like another type of property because they hold values.

// Any function attached inside an object is called a method. But the function must be an expression.

const personObj = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
};
// We can call the method in the object using dot or bracket notation
console.log(personObj.calcAge(1991));
console.log(personObj['calcAge'](1991));

// But we are inputting the birthYear when it is already in the object.

const personObj = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    calcAge: function() {
        console.log(this);
        return 2037 - this.birthYear;
    }
};
// We can call the method in the object using dot notation
console.log(personObj.calcAge());


// But what if we need to call the age more than once in our code?
// We would be running the method within the object mutiple times which could slow down our code if the method is doing compley calculations.
// Better to calculate the age once and store it as a new property so that it only gets calculated once.

// challenge
// "Jonas is a 46 year old teacher and he has a drivers License OR has no drivers License"

const personObj = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: false,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and ${this.hasDriversLicense ? "has a drivers license." : "does'nt have a drivers license."}`;
    }
};

console.log(personObj.calcAge());

console.log(personObj.age);
console.log(personObj.age);
console.log(personObj.age);

console.log(personObj.getSummary());


/*

Coding Challenge 3

Lets go back to mark and John Comparing their BMIs!
This time, lets use objects to implement the calculations!

Remember BMI = Mass / height **2 OR mass / (height * height).

1. For each of them, create an object with properties for thier full name, 
mass and height.

2. Crete a 'calcBMI' method on each object to calculate BMI 
(The same method on each object).
Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"


Test Data: Mark Miller 78kg 1.69m, John Smith 92kg 1.95m.



const markObj = {
    firstName: 'Mark', 
    lastName: 'Miller', 
    mass: 78,
    height: 1.69,
    
    calcBMI: function() {
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
};

const johnObj = {
    firstName: 'John', 
    lastName: 'Smith', 
    mass: 92,
    height: 1.95,
    
    calcBMI: function() {
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
};

// console.log(markObj.calcBMI());
// console.log(johnObj.calcBMI());

console.log(markObj.calcBMI() > johnObj.calcBMI() 
? `${markObj.firstName} ${markObj.lastName}'s BMI (${markObj.calcBMI()}) is higher than ${johnObj.firstName} ${johnObj.lastName}'s (${johnObj.calcBMI()})!` 
: `${johnObj.firstName} ${johnObj.lastName}'s BMI (${johnObj.calcBMI()}) is higher than ${markObj.firstName} ${markObj.lastName}'s (${markObj.calcBMI()})!`);


////// ITERATION - FOR LOOP //////

// For loop has three components:
// 1: for
// 2. define variable and set initla value
// 3. for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}

for (let rep = 5; rep <= 10; rep++) {
    console.log(`swimming repetition ${rep}`);
}    

for (let rep = 5; rep <= 15; rep++) {
    console.log(`walking repetition ${rep}`);
}  


///////// LOOPING ARRAYS //////////

// We have an array with five elements in it.
const personObj = [
    'Jonas', 
    'Schmedtmann', 
    1991,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];

// We want to loop through all the elements one by one.
// 1. We start the array at 0 because that is the first element in the array
// 2. We want to stop looping at 5 (because the array contains five elements)
// 3. Each time through the loop we increment by 1.
for (let i = 0; i<5 ; i++) {
    console.log(personObj[i]);
}


// We have an array with six elements in it.
const personObj2 = [
    'Jonas', 
    'Schmedtmann', 
    1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

// But because we have manually defined the condition to be less than 5 it will not iterate through element 6 in the array.
// We can dynamically calculate the array length by using built in length function!
for (let i = 0; i<personObj2.length ; i++) {
    console.log(personObj2[i]);
}

for (let i = 0; i<personObj2.length ; i++) {
    console.log(personObj2[i], typeof personObj2[i]);
}



const personObj2 = [
    'Jonas', 
    'Schmedtmann', 
    1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

// We can create a new empty array outside of the loop
const types = [];

for (let i = 0; i<personObj2.length ; i++) {
    console.log(personObj2[i], typeof personObj2[i]);

    types[i] = typeof personObj2[i];
}
// From within the for loop we are filling the types array with typeof for each i.

console.log(types);


const personObj2 = [
    'Jonas', 
    'Schmedtmann', 
    1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

// The same opperation can be done wihh an array push
const types = [];

for (let i = 0; i<personObj2.length ; i++) {
    console.log(personObj2[i], typeof personObj2[i]);

    types.push(typeof personObj2[i]);
}

console.log(types);


// We have an array of birthYears and we want to calculate ages and store it in a new array.
const birthYearArr = [1991, 2007, 1969, 2020];
const ageArr = [];

for (let i=0; i<birthYearArr.length; i++) {
    ageArr.push(2037 - birthYearArr[i]);
}

console.log(ageArr);



// Continue and break statements
// Continue is used to skip an i in the loop
// Break is used to completely stop the loop

const personObj2 = [
    'Jonas', 
    'Schmedtmann', 
    1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

for (let i=0; i<personObj2.length; i++) {
    if (typeof personObj2[i] !== 'string') continue;

    console.log(personObj2[i], typeof personObj2[i]);
}



const personObj2 = [
    'Jonas', 
    'Schmedtmann', 
    1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

for (let i=0; i<personObj2.length; i++) {
    if (typeof personObj2[i] === 'number') break;

    console.log(personObj2[i], typeof personObj2[i]);
}



///// LOOPING AN ARRAY BACKWARDS /////

const personArr = [
    'Jonas', 
    'Schmedtmann', 
    1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

for (let i=personArr.length-1; i>=0; i--) {
    
    console.log(personArr[i], typeof personArr[i]);
}


////// LOOPS WITHIN LOOPS //////

// We have a routine of three exercises with each exercise being repeated (or looped 5 times)

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`============ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`============ Exercise ${exercise} Lifting weights ${rep}`)
    }
}


///// THE WHILE LOOP /////

// A for loop has 3 components: Start, Condition and counter.
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

// A while loop only has one component, a condition and will run until the condition is not met. However we still need to define start of the loop and counter. We define the start outside of the loop and before the loop. The counter we increment after the loop has performed its action but within the loop curly braces.
let rep = 1;
while (rep <=10) {
    console.log(`swimming repetition ${rep}`);
    rep ++;
}



///// DICE ROLL WHILE LOOP /////

// THe dice will continue to roll until it lands on 6.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !==6) {
    console.log(`You Rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...you rolled a 6');
}



/* 
Coding Challenge 4

Lets improve the tip calculator using loops!

1. Create an array 'bills' containing all 10 test bill values;

2. Create empty arrays for the tips and totals.

3. Use the 'calcTip' function we wrote before to calculate tips and total values.
Use a for loop to perform the 10 calculations.

BONUS. Write a function called 'calcAvg' which takes an array called 'arr' as an argument. THis function calculates the average of all numbers in the given array.

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

*/

// 1 bills array
const billsArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2 Empty tips and totals arrays
const tipsArr = [];
const totalsArr = [];


// 3. CalcTip function and for loop calculator
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

for (let i=0; i<billsArr.length; i++) {
    tipsArr.push(calcTip(billsArr[i]));
    totalsArr.push(calcTip(billsArr[i] + [i]));
    console.log(`=== BILL: ${billsArr[i]} TIP: ${tipsArr[i]} TOTAL: ${totalsArr[i]}`);
}

// OR

for (let i=0; i<billsArr.length; i++) {
    const tip = calcTip(billsArr[i]);
    tipsArr.push(tip);
    totalsArr.push(tip + billsArr[i]);
}
console.log(billsArr, tipsArr, totalsArr);

// BONUS calculate averages
const calcAvg = function(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(`BILL AVERAGE: ${calcAvg(billsArr)} 
TIP AVERAGE: ${calcAvg(tipsArr)} 
TOTAL AVERAGE: ${calcAvg(totalsArr)}`);

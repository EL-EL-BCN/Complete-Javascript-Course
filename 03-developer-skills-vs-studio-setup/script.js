// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
PROBLEM
We work for a company building a smart home thermometer.
Our most recent task is this:

Given an array of temeratures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

*/

// const tempArr = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*
1) Understand the problem:
- Temp amlitude is the diference between max and min temp
- how to compyte max and min temps?
- what is sensor error and what to do?

2) Breaking up into sub-operations
 - how to ignore errors
 - find max value in array
 - find min value in array
 - max temp minus min temp is the diff between temps on day

*/

/*

const tempArr = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmpl = function (tempArr) {
  let max = tempArr[0];
  let min = tempArr[0];

  for (let i = 0; i < tempArr.length; i++) {
    const curTemp = tempArr[i];
    if (typeof curTemp !== 'number');
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const ampl = calcTempAmpl(tempArr);
console.log(ampl);

/* 
Problem 2: function should now recieve 2 arrays of temperatures.
- do we need to perform the function twice with two arrays?
- No, just merge the arrays
*/

/*

const tempArr1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const tempArr2 = [-3, 5, 1, 5, 28, 16, 30, 35];

const calcTempAmpl2 = function (tempArr1, tempArr2) {
  const tempArr = tempArr1.concat(tempArr2);

  let max = tempArr[0];
  let min = tempArr[0];

  for (let i = 0; i < tempArr.length; i++) {
    const curTemp = tempArr[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const ampl2 = calcTempAmpl2(tempArr1, tempArr2);
console.log(ampl2);

////// DEBUGGING //////

// Lets say that from our previous temperature example we need to work in kelvins.

const Measkelvin = function () {
  const measmt = {
    type: 'temp',
    unit: 'celcius',
    // C - FIX BUG
    value: Number(prompt('Degrees celcius:')),
    // value: prompt('Degrees celcius:')
  };
  // console.log(measmt);
  // B) FIND BUG
  console.table(measmt);
  // console.log(measmt.value);
  // console.warn(measmt.value);
  // console.error(measmt.value);
  const kelvin = measmt.value + 273;
  return kelvin;
};

// A) IDENTIFY BUG
console.log(Measkelvin());


///// DEBUGGING 2 /////

// Here we have changed the previous code to start the loops at zero rather than the first values of the arrays. The temperature array values are modified also.

// const tempArr1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const tempArr2 = [-3, 5, 1, 5, 18, 16, 30, 35];

const tempArr1 = [3, 5, 1];
const tempArr2 = [9, 4, 5];

const calcTempAmplBug = function (tempArr1, tempArr2) {
  const tempArr = tempArr1.concat(tempArr2);

  // let max = tempArr[0];
  // let min = tempArr[0];

  let max = 0;
  let min = 0;

  for (let i = 0; i < tempArr.length; i++) {
    const curTemp = tempArr[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplBug = calcTempAmplBug(tempArr1, tempArr2);
console.log(amplBug);

*/

/*
Coding Challenge 1

Given an array of forecasted maximum temperatures, the thermometer dispays a string with these temperatures.

Example: [17,21,23] will print "...17ºC in 1 days ...21ºC in 2 days ...23ºC in 3 days"

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

use the problem solving framework, understand the problem and break it up into sub problems.

Test data 1: [17,21,23]
Test data 2: [12, -5, 0, 4]
*/

const arr1 = [17, 21, 23];
const arr2 = [12, -5, 0, 4];

// METHOD 1
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const dayTemp = ` ...${arr[i]}ºC in ${i + 1} days`;
    str += dayTemp;
  }
  console.log(str);
};
printForecast(arr1);

// METHOD 2

const printForecast2 = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast2(arr2);

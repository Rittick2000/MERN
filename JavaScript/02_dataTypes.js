"use strict"; // treat all JS code as a newer version of JS code.

let score="33";

console.log(score); // 33
console.log(typeof score); //string
console.log(typeof score); //string

let scoreInNumebr=Number(score);
console.log(scoreInNumebr);//33
console.log(typeof scoreInNumebr);//number

let score2="33abc";
console.log(score2);//33abc
console.log(typeof score2);//string

let score2InNumber=Number(score2);
console.log(typeof score2InNumber);//number
console.log(score2InNumber);//NaN

let score3=null;
console.log(score3);//null

let score3InNumber=Number(score3);
console.log(typeof score3InNumber); //number
console.log(score3InNumber);//0

let score4=undefined;
console.log(score4);//undefined

let score4InNumber=Number(score4);
console.log(typeof score4InNumber); //number
console.log(score4InNumber);//NaN

const id=Symbol('123');
const anotherId=Symbol('123');


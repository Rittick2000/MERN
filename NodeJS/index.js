console.log("Hello World");
//console.log(window);  {In Node we don't have window or document object, this are the part of runtime
//environment that we get with browsers}.

// console.log();// it is a global object
// setTimeout(); // it is a global function
// clearTimeout();
// setInterval();
// clearInterval();

// All the global functions are belongs to "window" object in Java script, but for node we use "global" object.

// we can do two things,
// 1. window.setTimeout();  or setTimeout();    javaScript will automatically add that prefix.
// for NodeJs we use setTimeout() or global.setTimeout();

let message="Rittick";
console.log(message); // Rittick
console.log(global.message); //undefined, variables are not store in global object
console.log(module); // in node every file is a module and scope of varibales are with in the module only.
let logger=require('./logger'); // logger will store all the exports element from "logger.js".
console.log(logger); 
logger.log('Rittick');


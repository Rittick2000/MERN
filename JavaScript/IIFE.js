// Immediately Invoked Function Expressions 

// use to stop polution from global scope
// to execute the function immediately
// ()(); this is IIFE

// Example

(function abc(){
    console.log("here");
})();


(()=>{console.log("Here2")})();


(
    (name)=>{
        console.log(`hello ${name}`);
    }
)("Rittick");
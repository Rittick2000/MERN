console.log("First");
async function abc(){
     setTimeout(()=>console.log("second"),1000);
}
abc();
console.log("third");
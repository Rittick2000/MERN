const user={
    name: "Rittick",
    age: 23,
    print: function(){
        console.log(`Hello ${this.name}, welcome to JavaScript`);
        console.log(this);// prints the current context of "user"
    }
};

user.print();

user.name="Rahul";

user.print();

console.log(this); // it's empty currently

function abc(){
    let name="Rittick";
    console.log(this);
    console.log(this.name);
}
abc();


// this does not work with arrow function
const arrowfunction=()=>{
    let username="Rittick";
    console.log(this); // {}
    console.log(this.username); // undefined
}
arrowfunction();


// Implicite function

const temp= (num1,num2)=> num1+num2;
console.log(temp(2,3)); // 5

const obj1=()=>{name: "Rittick"};
console.log(obj1());  // undefined

const obj2=()=>({name: "Rittick"})
console.log(obj2());  // {name: "Rittick"}
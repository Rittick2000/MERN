function add2(num)
{
    return num+2;
}

add2.power=3;

console.log(add2(5));
console.log(add2.power); // function act like an object in javascript
console.log(add2.prototype);


function createUser(name,age){
    this.name=name;
    this.age=age;
}

createUser.prototype.increment=function(){
    this.age++;
}
createUser.prototype.print=function(){
    console.log(`name=${this.name} and age=${this.age}`);
}

const user1=new createUser("Rittick",23);
const user2=new createUser("dravgot",7);

user1.increment();
user1.print();
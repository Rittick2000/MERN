
// this type of Object decleration does not create any singleton

const sym=Symbol();
const obj={
    Name:"Rittick",
    Roll:224101041,
    Email: "rittickmondal@iitg.ac.in",
    Cource:"M.Tech in CSE",
    [sym]: "abc",
};

// console.log(obj);

// console.log(obj.Name);
// console.log(obj["Name"]);
//Object.freeze(obj);
obj.Name="Hi";
///console.log(obj.Name);
obj.greeting=function(){
    console.log("test print");
};
 console.log(obj.greeting());



//Singleton Object
const obj2=new Object();

obj2.name="Rittick";
obj2.Roll=12323;
//console.log(obj2);

const obj3={
    name:"riju",
    roll:1243243,
}
const obj4={...obj2,...obj3,...obj};
console.log(obj4);

console.log(Object.keys(obj));
console.log(Object.values(obj));

//de-structering of object
const {name} = obj3;
console.log(name);

const {name:nm} =obj3;

console.log(nm);
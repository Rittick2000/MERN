// forOf Loop

const arr=[1,2,3,4,5]

//for(const val of arr)
    //console.log(val);


const map=new Map();
map.set('In', "India");
map.set('Fr', 'France');
map.set('Uk','United Kingdom');

// for(const [key,value] of map)
//     console.log(`Cuntry code of ${value} is ${key}`);

// forOf Loop does not work with Object

const myObj={
    js : "javascript",
    cpp: "C++",
    py : "Python",
}

// for(const lang of myObj)  ==>myObj is not Iterable
//     console.log(lang);


// ======> forIn Loop
// for(const lang in myObj)  //==> It gives us Keys of an object
// {
//     console.log(lang);
//     console.log(myObj[lang]);
// }/


// =======> forEach Loop
const obj=[{
    js : "javascript",
    cpp: "C++",
    py : "Python",
}]
obj.forEach((elements) => {
    console.log(elements);
});
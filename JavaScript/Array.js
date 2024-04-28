const arr=new Array(1,2,3,4,5);
console.log(arr);

const abc=arr.join();
console.log(abc);
console.log(typeof abc);
console.log(abc[1]);

const arr2=[6,7,8,9];

const arr3=[10,11,12,14,15];

const finalArray=[...arr,...arr2,...arr3]; // Sprad Operator 
console.log(finalArray);

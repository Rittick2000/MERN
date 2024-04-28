const arr=[1,2,3,4,5,6,7,8];

const newNum=arr.filter((nums)=>{
    return nums>4;
})
console.log(newNum);

//chaning
const temp= arr.map((nums)=> (nums*10)).map((nums)=>nums+2).filter((nums)=> nums>15);
console.log(temp);

const sum=arr.reduce((acc,curr)=>acc+curr,0) // check in mdn
console.log(sum);
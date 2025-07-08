
const debounce=(func, delay)=>{
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            func.apply(this,args);
        },delay);
    }
}

const getData=debounce((e)=>{
    console.log("calling with data=",e.target.value);
},500);


const throttling=(func,delay)=>{
    let lastCall=0;
    return function(...args){
        const now=new Date().getTime();
        if(now-lastCall>=delay)
        {
            lastCall=now;
            func.apply(this,args);
        }
    }
}

const callAPI=throttling((e)=>{
    console.log("calling=",e.target.value);
},500);



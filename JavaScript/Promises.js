const promiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async Task is Completed");
        resolve();
    },1000);
});
promiseOne.then(()=>{
    console.log("task1 completed");
});

// Type two of writing the same thing

new Promise((resolve,reject)=>{
    //Do all the async task here
    setTimeout(()=>{
        console.log("async task2 is completed");
        resolve();
    },1000);
}).then(()=>{
    console.log("task2 completed");
})

//Passing parameter from Promise

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //passing object using resolve;
        resolve({username:'Rittick', age:23});
    },1000)
})

promiseThree.then((data)=>{
    console.log(data);
    console.log("name=",data.username);
    console.log("age=",data.age);
})

//Promise with reject and .then chaining and finally

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(error)
        reject("something went wrong");
        else
        resolve({username:'Dravgot',age: 7});
    },1000);
})
promiseFour
.then((userData)=>{
    console.log(userData);
    return userData.username; // this return will go to next .then statement
})
.then((name)=>{
    console.log(name);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise Done or Reject, this will run every time");
})


//Promise with Async Await

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true;
        if(!err)
            resolve({username:"Suva",age:24});
        else
            reject("Error: JS Gone Wrong");
    },1000);
});

// Handeling promise using "async await", (Alternative of .then)
// "async await" does not handle error, to handle error we use "try catch"
async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumePromiseFive();

//Async Function

async function getAllUser(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }

}
getAllUser();


// Same thing with .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("Something went wrong");
});
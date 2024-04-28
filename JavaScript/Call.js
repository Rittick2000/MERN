function setUserName(username)
{
    this.username=username;
}


//=====> Problematic code
// function userInfo(name,email,password)
// {
//     setUserName(name);
//     this.email=email;
//     this.password=password;
// }


//=====> Good Code
function userInfo(name,email,password)
{
    setUserName.call(this,name);
    this.email=email;
    this.password=password;
}
const user1=new userInfo("rittick","rimondal@enphaseenergy.com","1123");
console.log(user1);
//userInfo { email: 'rimondal@enphaseenergy.com', password: '1123' }
// username missing

//======>problem
// serUserName add username to it's own execution context's this. after execution of function it deleted
// from call stack with it's variable

//======>solution
// use .call method during calling the function and pass global this as a parameter with this.

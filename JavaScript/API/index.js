const requestURL='https://api.github.com/users/hiteshchoudhary';
const xhr=new XMLHttpRequest();
xhr.open('GET',requestURL);
xhr.send();
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState==4)
    {
        console.log(this.responseText);
        console.log(typeof(this.responseText)); // string 
        const data=JSON.parse(this.responseText); // JSON object
    }
}
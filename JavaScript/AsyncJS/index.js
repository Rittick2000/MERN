const name=document.querySelector('h1');

const stop=setTimeout(()=>{
    name.innerHTML="SDE@ENPH";
},1);

const button=document.querySelector('button');
button.addEventListener('click',()=>{
    clearTimeout(stop);
    console.log("Change Stop");
})
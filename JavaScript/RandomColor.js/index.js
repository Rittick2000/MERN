const start=document.querySelector('#Start');
const end=document.querySelector('#End');
const message=document.createElement('p');
start.addEventListener('click',()=>{
    changeColor=setInterval(()=>{
        document.querySelector('body').style.backgroundColor=`#${Math.round(Math.random()*1000000)}`;
    },1000);
    message.innerHTML="Color Changing Started, click on End to stop";
    document.querySelector('body').appendChild(message);
});
end.addEventListener('click',()=>{
    clearInterval(changeColor);
    message.innerHTML="Color Changing Stopped, click on start to resume"
})
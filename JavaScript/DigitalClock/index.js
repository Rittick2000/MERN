setInterval(()=>{
    const date=new Date();
    document.querySelector('.clock').innerHTML=date.toLocaleTimeString();
},1000);
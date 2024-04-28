function changeBackground(color){
    const body=document.querySelector('.bodyy');
    body.style.backgroundColor=color;
}

const buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
       changeBackground(button.innerHTML) ;
    });
})

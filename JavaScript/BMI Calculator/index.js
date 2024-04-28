

document.querySelector(".calculate").addEventListener('click', ()=>{
    const height=parseFloat(document.querySelector(".Height").value);
    const weight=parseFloat(document.querySelector(".Weight").value);
    const BMI= height/(weight*weight);
    const form=document.querySelector('.form');
    const result= document.createElement('p');
    result.style.backgroundColor="red";
    result.style.color="black";
    result.style.fontWeight="bold";
    if(BMI<=18.6)
        result.innerHTML=`Your BMI is ${BMI} You are under Weight`;
    else if (BMI>24.6)
        result.innerHTML=`Your BMI is ${BMI} You are Over Weight`;
    else
        result.innerHTML=`Your BMI is ${BMI} Your Weight is Normal`;
    form.appendChild(result);

})

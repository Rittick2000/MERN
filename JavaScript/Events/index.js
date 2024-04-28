// document.querySelector('.second')
// .addEventListener('click',()=>alert("second Clicked"),false);
// document.querySelector('.third')
// .addEventListener('click',(e)=>console.log(e));
// // READ ABOUT ALL THE EVENTS IN e


// //Event Propagation
// //==>If we emit any event, then which 
// //event response will take place first.
// //==> Two types,  1) Bubbling (bottom to Top)
// //                2) Capturing (Top to Bottom)
// //==> Default Behaviour is Bubbling , we have to use ""true""
// // as third parameter to make it "Capturing".


// document.querySelector('.first')
// .addEventListener('click',(e)=>
// {
//     console.log("Clicke on First")
//     e.stopPropagation(); // TO stop the propagation
// },false);

// document.querySelector('.buttons')
// .addEventListener('click',()=>
// {
//     console.log("clicked on buttons")
// },false);

// document.querySelector('.google')
// .addEventListener('click',(e)=>
// {
//     e.preventDefault();// to Prevent the default behaviour of the event
//     console.log("clicked on google")
// },false);

const buttons=document.querySelector(".allButtons");
buttons.addEventListener('click',(e)=>{
    const parent=e.target.parentNode;
    parent.remove();
})
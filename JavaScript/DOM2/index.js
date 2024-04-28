const parentElement=document.querySelector('.parent');
console.log(parentElement);
console.log(parentElement.children);

for(let i=0;i<parentElement.children.length;i++)
    console.log(parentElement.children[i].innerHTML);

console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);

const days=document.querySelector('.days');
console.log(days);
console.log(days.parentElement);
console.log(days.nextElementSibling);

//Creating a new Element using DOM
const div=document.createElement('div');
console.log(div);
div.className="main";
div.id="newElement";
div.style.backgroundColor="green";
const addText=document.createTextNode("Rittick Mondal");
div.appendChild(addText);
const par=document.querySelector('.parent').parentNode.appendChild(div);


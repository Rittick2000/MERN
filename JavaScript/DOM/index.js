console.log(document.getElementById('title')); 
console.log(document.getElementsByClassName('heading'));
console.log(document.getElementById('title').getAttribute('class'));
document.getElementById('title').setAttribute('class','test') // It's overwrites the attribute, means now class name become test
// to protect the overwrite, write both the class name previous one and new one
document.getElementById('title').setAttribute('class', ' test heading');

//innerHTML, innerText, textContext
const title= document.getElementById('title');
console.log(title);
console.log(title.innerHTML); // shows the text along with HTML element
console.log(title.innerText); // shows only the text, that dispaly in the screen
console.log(title.textContent); // shows all the text

// query Selecto
console.log(document.querySelector('h1'));

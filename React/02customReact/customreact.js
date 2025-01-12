
// this functiono react element and inject that into main container
function customRender(reactElement,container){

    /*const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);*/

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if (prop==='children')
            continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

// type of element
const reactElement={
    type: 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google',
}

// taking reference of the id, where we have to inject other elements
const mainContainer=document.querySelector('#root');

// this is our custom renderrred like react's .render
// this function takes two props,
//1. element with all of it's information
//2. main container where to inject
customRender(reactElement,mainContainer);
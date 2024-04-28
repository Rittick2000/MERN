const language=document.querySelector('.language');

function addLanguage(lang)
{
    const languageToAdd=document.createElement('li');
    //languageToAdd.innerHTML=lang;
    languageToAdd.appendChild(document.createTextNode(lang));
    language.appendChild(languageToAdd);

}
addLanguage("C++");
addLanguage("Python");

// to Remove the child
language.lastChild.remove();
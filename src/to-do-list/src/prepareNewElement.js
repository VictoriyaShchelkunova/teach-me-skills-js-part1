
const input = document.getElementById('title');

function createNewElement() {
    const element = {
        "title": ""
    };    
    element.title = input.value;
    return element;
}

const button = document.getElementById('addItemList');

function addNewElement(element) {
    const ul = document.getElementsByTagName('ul')[0];
    const li = document.createElement('li');
    li.innerText = element.title;
    ul.prepend(li);
    input.value = '';
}

export {createNewElement, addNewElement, button}
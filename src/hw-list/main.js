let liItemsRemoved = localStorage.liItemsRemoved ? JSON.parse(localStorage.liItemsRemoved) : [];

async function getList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const list = await response.json();
    createList(list);
};

getList();

function createList(list) {
    const ul = document.createElement('ul');
    list.forEach(item => {
        if (liItemsRemoved.indexOf(item.id + '') === -1) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.innerText = item.title;
            li.append(span);
            li.id = item.id;
            ul.append(li);
        }
    });
    document.getElementById('button-clear').after(ul);
    ul.addEventListener('click', deleteListItem);
};

function deleteListItem({target}) {
    if (target.localName === 'span') {
        const li = target.closest('li');
        liItemsRemoved.push(li.id);
        localStorage.liItemsRemoved = JSON.stringify(liItemsRemoved);
        li.remove();
    };
};

const buttonClear = document.getElementById('button-clear');
buttonClear.addEventListener('click', () => {
    localStorage.clear();
    liItemsRemoved = [];
})

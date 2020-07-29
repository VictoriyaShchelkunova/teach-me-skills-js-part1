
const createElements = function (list) {
    
    const ul = document.createElement('ul');
    list.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.title;
        ul.prepend(li);
    });

    document.body.append(ul);
    console.log(ul);    
}

export default createElements;


/**
 * Написать страницу, где будет размещена кнопка. При нажатии на эту кнопку массив list должен
 * отобразиться в виде списка на странице, а кнопка должна исчезнуть. При нажатии на один из элементов
 * он должен удаляться, если удалить весь список, то должна отображаться строка с текстом "список пуст"
 */

const list = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
    {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
    },
    {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
    },
    {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
    },
    {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
    },
    {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
    },
    {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true
    },
    {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
    },
    {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
    },
    {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false
    },
    {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true
    },
    {
        "userId": 2,
        "id": 23,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false
    },
    {
        "userId": 2,
        "id": 24,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false
    },
    {
        "userId": 2,
        "id": 25,
        "title": "voluptas quo tenetur perspiciatis explicabo natus",
        "completed": true
    },
    {
        "userId": 2,
        "id": 26,
        "title": "aliquam aut quasi",
        "completed": true
    },
    {
        "userId": 2,
        "id": 27,
        "title": "veritatis pariatur delectus",
        "completed": true
    },
    {
        "userId": 2,
        "id": 28,
        "title": "nesciunt totam sit blanditiis sit",
        "completed": false
    },
    {
        "userId": 2,
        "id": 29,
        "title": "laborum aut in quam",
        "completed": false
    },
    {
        "userId": 2,
        "id": 30,
        "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        "completed": true
    },
    {
        "userId": 2,
        "id": 31,
        "title": "repudiandae totam in est sint facere fuga",
        "completed": false
    },
    {
        "userId": 2,
        "id": 32,
        "title": "earum doloribus ea doloremque quis",
        "completed": false
    },
    {
        "userId": 2,
        "id": 33,
        "title": "sint sit aut vero",
        "completed": false
    },
    {
        "userId": 2,
        "id": 34,
        "title": "porro aut necessitatibus eaque distinctio",
        "completed": false
    },
    {
        "userId": 2,
        "id": 35,
        "title": "repellendus veritatis molestias dicta incidunt",
        "completed": true
    }
];

const button = document.getElementById('button');

const ul = document.createElement('ul');

const buttonAdd = document.getElementById('buttonAdd');

const buttonDelete = document.getElementById('buttonDelete');

function createList(list) {

    list.forEach(elem => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = elem.completed;

        li.prepend(checkbox);

        const span = document.createElement('span');
        span.innerText = elem.title;

        checkbox.after(span);

        li.setAttribute('id', elem.id);
        li.setAttribute('data-userId', elem.userId);


        ul.append(li);


    });

    buttonDelete.after(ul);
};



function showList() {
    createList(list);
    button.remove();
};

button.addEventListener('click', showList);

// ul.addEventListener('click', function (event) {

//     const currentElement = event.target

//     if (currentElement.localName === 'span') {
//         currentElement.parentElement.remove();

//         list.splice(list.indexOf(elem => elem.id === parentElement.id), 1);

//         if (!list.length) {
//             const span = document.createElement('span')
//             span.innerText = 'Список пуст';
//             document.body.prepend(span);
//         }
//     }
// });

const input = document.getElementById('input');

const userId = 3;
let id = 36;
const completed = false;

buttonAdd.addEventListener('click', function () {
    let title = input.value;
    list.push({
        userId,
        id,
        title,
        completed,
    });


    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = completed;

    li.prepend(checkbox);

    const span = document.createElement('span');
    span.innerText = title;

    checkbox.after(span);

    li.setAttribute('id', id);
    li.setAttribute('data-userId', userId);


    ul.append(li);

    input.value = '';
    ++id;
});

buttonDelete.addEventListener('click', function () {
    const checkboxes = [...document.querySelectorAll('[type="checkbox"]')];
    checkboxes.forEach(checkbox => {
        const checkboxParent = checkbox.parentElement;
        if (checkbox.checked) {
            checkboxParent.remove();
            list.splice(list.indexOf(item => item.id === checkboxParent.id), 1);
        }
    })
});


ul.addEventListener('mouseover', function (event) {

    const currentElement = event.target
    const buttonChange = document.createElement('button');

    if (currentElement.localName === 'span' && !currentElement.nextElementSibling) {
        buttonChange.innerText = 'Change';
        currentElement.after(buttonChange);
    };
    function changeLi() {
        const text = currentElement.innerText;

        const previousElement = currentElement.previousElementSibling;
        currentElement.remove();

        const inputLi = document.createElement('input');
        inputLi.setAttribute('type', 'text');
        inputLi.value = text;

        previousElement.after(inputLi);
        buttonChange.remove();

        const buttonSave = document.createElement('button');
        buttonSave.innerText = 'Save';
        inputLi.after(buttonSave);

        function saveLi() {
            const inputText = inputLi.value;
            inputLi.remove();

            const span = document.createElement('span');
            span.innerText = inputText;
            previousElement.after(span);

            buttonSave.remove();
        }

        buttonSave.addEventListener('click', saveLi);

    };

    buttonChange.addEventListener('click', changeLi);
});


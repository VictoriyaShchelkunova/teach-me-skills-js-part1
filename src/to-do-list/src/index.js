
import  getList from './getList';
import  createElements from './createList';
import {createNewElement, addNewElement, button} from './prepareNewElement';

async function showList(){
    const list = await getList();
    createElements(list);
}

showList();

button.addEventListener('click', async () => {
    const element = createNewElement();
    try{
        await fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(element)
    });
    } catch (e){
        console.log(e);
    }    
    addNewElement(element);
});
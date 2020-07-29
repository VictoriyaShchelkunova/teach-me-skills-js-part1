
import  getList from './getList';
import  createElements from './createList';

async function showList(){
    const list = await getList();
    createElements(list);
}

showList();


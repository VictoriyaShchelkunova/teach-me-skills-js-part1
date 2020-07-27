
const getList = require('./getList');
const createElements = require('./createList');

async function showList(){
    const list = await getList();
    createElements(list);
}

showList();


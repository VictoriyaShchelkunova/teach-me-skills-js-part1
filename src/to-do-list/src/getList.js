
async function getList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const list = await response.json();
        return list;
    } catch (e) {
        console.log(e);
    }
}


export default getList;



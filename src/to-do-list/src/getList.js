
async function getList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        if (!response.ok) {
            throw new Error('mistake')
        }
        const list = await response.json();
        return list;
    } catch (e) {
        console.log(e);
    }
}


export default getList;



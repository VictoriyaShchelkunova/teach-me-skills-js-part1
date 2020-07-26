async function getList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const list = await response.json();
    return list;
}






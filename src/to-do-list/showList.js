async function showList(){
    const list = await getList();
    createElements(list);
}
showList();


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { default as Item } from './Item';
import Input from './Input';
import { saveListAction } from '../actions';

const List = ({ list, saveList }) => {
  useEffect(() => {
    async function fetchList() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const list = await response.json();

      saveList(list);
    }

    fetchList();
  }, [saveList]);

  debugger
  return (
   
    <section>
      <Input />
      <ul>      
        {
          list.map((item) => <Item input={item?.input} key={item.id} title={item.title} itemId={item.id} />)
        }
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  list: state.list.items,
});
const mapDispatchToProps = (dispatch) => ({
  saveList: (list) => dispatch(saveListAction(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
import React from 'react';
import { connect } from 'react-redux';
import { deleteItemAction } from '../actions';
import { changeItemAction, saveItemAction, changeTitleAction } from '../actions';



const Item = ({ title, deleteItem, itemId, onChangeItem, input, onSaveItem, inputTitle }) => {
  
  const onChange = ({ target }) => {
    inputTitle = target.value
  }
  
  if (input) {
    return (
      <>
        <li><input id={itemId} value={inputTitle} onChange={onChange}></input>
        <button onClick={onSaveItem}>Save</button></li>
      </>
    )
  } else {
    return (
      title ? <li ><span onClick={deleteItem}>{title}</span>
        <button onClick={onChangeItem}>Change</button></li> : null
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    inputTitle: state.inputTitle
  }
}

const mapDispatchToProps = (dispatch, { itemId, title}) => ({
  deleteItem: () => dispatch(deleteItemAction(itemId)),
  onChangeItem: () => dispatch(changeItemAction({ itemId, title })),
  onSaveItem: () => dispatch(saveItemAction(itemId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);
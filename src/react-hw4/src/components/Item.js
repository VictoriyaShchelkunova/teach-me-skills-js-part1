import React from 'react';
import { connect } from 'react-redux';
import { deleteItemAction } from '../actions';
import { changeItemAction, saveItemAction, saveChangeTitleAction} from '../actions';



const Item = ({ title, deleteItem, itemId, onChangeItem, input, inputTitle, onChangeTitle, onSaveChangeTitle }) => {
  
  const onChange = ({ target }) => {
    inputTitle = target.value
    onChangeTitle(inputTitle);
  }
  
  if (input) {
    return (
      <>
        <li><input id={itemId} value={inputTitle} onChange={onChange}></input>
        <button onClick={onSaveChangeTitle}>Save</button></li>
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
  onChangeTitle: (inputTitle) => dispatch({
    type: 'CHANGE_TITLE',
    payload: inputTitle
  }),
  onSaveChangeTitle: () => dispatch(saveChangeTitleAction(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);
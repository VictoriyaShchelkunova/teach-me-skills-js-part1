import { SAVE_LIST, DELETE_ITEM, ADD_ITEM, CHANGE_ITEM, SAVE_ITEM, SAVE_CHANGETITLE } from './constants';

export const saveListAction = (list) => ({
  type: SAVE_LIST,
  payload: list,
});

export const deleteItemAction = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});

export const addItemAction = (value) => ({
  type: ADD_ITEM,
  payload: value
});

export const changeItemAction = ({ itemId, title }) => ({
  type: CHANGE_ITEM,
  payload: [itemId, title]
});

export const saveItemAction = ({itemId, inputTitle}) => ({
  type: SAVE_ITEM,
  payload: {itemId, inputTitle},
});

export const saveChangeTitleAction = ( itemId) => ({
  type: SAVE_CHANGETITLE,
  payload: itemId,
});


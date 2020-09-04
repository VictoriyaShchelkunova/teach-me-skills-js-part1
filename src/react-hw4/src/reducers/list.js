import { SAVE_LIST, CHANGE_ITEM, ADD_ITEM, DELETE_ITEM, SAVE_ITEM, SAVE_CHANGETITLE } from '../constants';

const defaultState = {
  items: [],
  inputTitle: ''
};

export const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_LIST: {
      return {
        items: action.payload,
        inputTitle: ''
      };
    }

    case CHANGE_ITEM: {
      debugger
      return {
        items: state.items.map((item) => {
          if (item.id !== action.payload[0]) {
            return item;
          } else {
            return { ...item, input: true }
          }
        }),
        inputTitle: ''
      }
    }

    case ADD_ITEM: {
      return {
        items: [{ title: action.payload, id: state.items[0].id - 1 }, ...state.items],
        inputTitle: ''
      }
    }

    case DELETE_ITEM: {
      return {
        items: state.items.filter(({ id }) => id !== action.payload),
        inputTitle: ''
      };
    }
    case SAVE_ITEM: {
      debugger
      return {
        items: state.items.map((item) => {
          if (item.id !== action.payload) {
            return item;
          } else {
            return { id: action.payload, input: false, title: state.inputTitle }
          }
        }),
        inputTitle: ''
      }
    }
    case "CHANGE_TITLE": {
      debugger
      return {
        items: state.items,
        inputTitle: action.payload
      }
    }

    case SAVE_CHANGETITLE: {
      debugger
      return {
        items: state.items.map((item) => {
          if (item.id !== action.payload) {
            return item;
          } else {
            return {id: action.payload, input: false, title: state.inputTitle}
          }
        }),
        inputTitle: action.payload
      }
    }

    default: {
      return state;
    }
  }


};
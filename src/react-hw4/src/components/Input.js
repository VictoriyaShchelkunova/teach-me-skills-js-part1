import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemAction } from '../actions'

const Input = (props) => {
  const [text, setText] = useState('');
  
  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const onChangeInput = ({target}) => {
    setTimeout (() => {
      target.value = '';
      setText(target.value);
    }, 1000)
    
  }

  return (
    <div>
      <input onChange={handleChange} onBlur={onChangeInput}/>
      <button onClick={() => props.onSave(text)}>save</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSave: (text) => dispatch(addItemAction(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
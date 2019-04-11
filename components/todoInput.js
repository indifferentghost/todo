import React, { Fragment, useState } from 'react';
import { addTodo } from '../actions/todoActions';
import { useStateValue } from '../state';

function TodoInput() {
  const [text, setText] = useState('');
  const [, dispatch] = useStateValue();

  return (
    <Fragment>
      <input
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button onClick={() => addTodo(dispatch, { text })}>
        Add Todo
      </button>
    </Fragment>
  );
}

export default TodoInput;

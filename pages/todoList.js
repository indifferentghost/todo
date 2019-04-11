import React from 'react';
import { useStateValue } from '../state';

function TodoList() {
  const [{ todos }] = useStateValue();
  return (
    <div>{todos.map(({ text }) => <p>{text}</p>)}</div>
  );
}

export default TodoList;

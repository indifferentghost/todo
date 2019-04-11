import React, { useEffect } from 'react';

import Header from "../components/header";
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';

import { addTodo, getTodos } from '../actions/todoActions';
import { useStateValue } from "../state";

function Index() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    getTodos(dispatch);    
  }, []);

  return (
    <main>
      <Header />
      <section>
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}

export default Index;

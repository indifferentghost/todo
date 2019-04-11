import React, { useEffect } from 'react';
import Link from "next/link";
import Header from "../components/header";
import { addTodo, getTodos } from '../actions/todoActions';
import { useStateValue } from "../state";
import TodoInput from './todoInput';
import TodoList from './todoList';

function Index() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    getTodos(dispatch);    
  }, []);

  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}

export default Index;

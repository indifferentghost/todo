import { useStateValue } from '../state';
import Todo from './todo';

function TodoList() {
  const [{ todos }] = useStateValue();

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.$loki} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;

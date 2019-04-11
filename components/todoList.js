import { useStateValue } from '../state';
import Todo from './todo';

function TodoList() {
  const [{ todos }] = useStateValue();

  return (
    <div>
      {todos.map(props => (
        <Todo key={props.$loki} {...props} />
      ))}
    </div>
  );
}

export default TodoList;

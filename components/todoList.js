import { useStateValue } from '../state';
// import { filterTodos } from '../actions/todoActions';
import Todo from './todo';

function TodoList() {
  const [state /* , dispatch */] = useStateValue();

  /*
    <span>filter</span>
      <input
        onChange={event => filterTodos(dispatch, event.target.value)}
      />
  */
  return (
    <div>
      {state.todos.map(todo => (
        <Todo key={todo.$loki} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;

import { updateTodo } from '../actions/todoActions';
import { useStateValue } from '../state';

function Todo({ text, completed, $loki }) {
  const [, dispatch] = useStateValue();
  const handleChecked = () =>
    updateTodo(dispatch, { text, completed: !completed, $loki });
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleChecked}
      />
      <span>{text}</span>
    </div>
  );
}

export default Todo;

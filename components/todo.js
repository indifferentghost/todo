import { deleteTodo } from '../actions/todoActions';
import { useStateValue } from '../state';

function Todo({ text, completed, $loki }) {
  const [, dispatch] = useStateValue();
  const handleChecked = () =>
    deleteTodo(dispatch, { text, completed: !completed, $loki });
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

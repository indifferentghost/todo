import PropTypes from 'prop-types';
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

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  $loki: PropTypes.number.isRequired,
};

export default Todo;

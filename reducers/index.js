import { todoReducer } from './todoReducer';

export default ({ todos }, action) => ({
  todos: todoReducer(todos, action),
});

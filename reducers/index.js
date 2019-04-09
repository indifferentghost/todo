import { todoReducer } from './todoReducer';

export default ({ todo }, action) => ({
  todo: todoReducer(todo, action),
});

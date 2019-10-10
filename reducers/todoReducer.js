import produce from 'immer';
import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  FILTER_TODOS,
} from '../actions/todoActions';

export const todoReducer = produce((draft, { type, data }) => {
  switch (type) {
    case DELETE_TODO:
    case ADD_TODO:
    case GET_TODOS:
      return data;
    case FILTER_TODOS:
      return draft.filter(todo => todo.text.includes(data));
  }
});

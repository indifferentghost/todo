import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
} from '../actions/todoActions';

export const todoReducer = (state, { type, data }) => {
  switch (type) {
    case DELETE_TODO:
    case ADD_TODO:
      return [...state];
    case GET_TODOS:
      return [...data];
  }
};

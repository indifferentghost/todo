import { ADD_TODO, GET_TODOS } from '../actions/todoActions';

export const todoReducer = (state, { type, data }) => {
  switch (type) {
    case ADD_TODO:
      return [...state];
    case GET_TODOS:
      return [...data];
  }
};

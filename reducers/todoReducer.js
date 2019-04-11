import { ADD_TODO } from '../actions/todoActions';

export const todoReducer = (state, { type, data }) => {
  console.log('reducer', data)
  switch (type) {
    case ADD_TODO:
      return [...state, ...data];
  }
}

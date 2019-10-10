import axios from 'axios';

export const ADD_TODO = Symbol('ADD_TODO');
export const GET_TODOS = Symbol('GET_TODOS');
export const UPDATE_TODO = Symbol('UPDATE_TODO');
export const DELETE_TODO = Symbol('DELETE_TODO');
export const FILTER_TODOS = Symbol('FILTER_TODO');

const url = 'http://localhost:5000/api';

export const addTodo = async (
  dispatch,
  { text, completed = false },
) => {
  await axios.post(`${url}/todos`, { text, completed });
  getTodos(dispatch);
};

export const getTodos = async dispatch => {
  const { data } = await axios.get(`${url}/todos`);

  dispatch({
    data,
    type: GET_TODOS,
  });
};

export const updateTodo = async (
  dispatch,
  { text, completed, $loki: id },
) => {
  await axios.put(`${url}/todos/${id}`, { text, completed });
  getTodos(dispatch);
};

export const deleteTodo = async (dispatch, { $loki: id }) => {
  await axios.delete(`${url}/todos/${id}`);
  getTodos(dispatch);
};

export const filterTodos = async (dispatch, filterBy) => {
  dispatch({
    data: filterBy,
    type: FILTER_TODOS,
  });
};

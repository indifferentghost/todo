import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';

const url = 'http://localhost:5000/api';
export const addTodo = async (
  dispatch, { text, completed = false }
) => {
  await axios.post(`${url}/todos`, { text, completed })
  const { data } = await axios.get(`${url}/todos`);
  
  dispatch({
    data,
    type: ADD_TODO,
  });
}

export const getTodos = async dispatch => {
  const { data } = await axios.get(`${url}/todos`);

  dispatch({
    data,
    type: GET_TODOS,
  });
};

import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = async (
  dispatch, { text, completed = false }
) => {
  await axios.post('http://localhost:5000/api/todos', { text, completed })
  const { data } = await axios.get('http://localhost:5000/api/todos');
  
  dispatch({
    data,
    type: ADD_TODO,
  });
}

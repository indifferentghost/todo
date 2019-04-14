import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducers';

export const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);

function StateProvider({ children }) {
  const initialState = { todos: [] };
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

StateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default StateProvider;

import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducers';

export const StateContext = createContext();

const initialState = { todos: [] };

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

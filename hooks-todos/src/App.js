import React, { useContext, useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import TodosContext from './context';
import todosReducer from './reducer';

export default function App() {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider
      value={{
        state,
        dispatch
      }}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  );
}

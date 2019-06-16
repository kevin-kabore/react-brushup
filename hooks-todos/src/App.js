import React, { useContext, useReducer, useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import TodosContext from './context';
import todosReducer from './reducer';

const useAPI = endpoint => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const response = await fetch(endpoint).then(res => res.json());

    setData(response);
  };

  return data;
};

export default function App() {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const savedTodos = useAPI('https://hooks-api.kevinkabore.now.sh/todos');

  useEffect(
    () => {
      dispatch({
        type: 'GET_TODOS',
        payload: savedTodos
      });
    },
    [savedTodos]
  );
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

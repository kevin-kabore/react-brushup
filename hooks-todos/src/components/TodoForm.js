import React, { useState, useEffect, useContext } from 'react';

import TodosContext from '../context';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(
    () => {
      if (currentTodo.text) {
        setTodo(currentTodo.text);
      }
    },
    [currentTodo.id, currentTodo.text]
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (currentTodo.text) {
      dispatch({
        type: 'UPDATE_TODO',
        payload: todo
      });
    } else {
      dispatch({
        type: 'ADD_TODO',
        payload: todo
      });
    }

    setTodo('');
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        onChange={event => setTodo(event.target.value)}
        className="border-black borger-solid border-2"
        value={todo}
      />{' '}
    </form>
  );
}

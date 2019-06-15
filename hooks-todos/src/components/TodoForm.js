import React, { useState, useContext } from 'react';

import TodosContext from '../context';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const { dispatch } = useContext(TodosContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    });
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

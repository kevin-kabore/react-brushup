import React, { useContext } from 'react';
import TodosContext from '../context'

export default function TodoList () {
  const {state} = useContext(TodosContext)

  return (
    <div>
      {state.todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
        </li>
      ))}
    </div>
  );
}

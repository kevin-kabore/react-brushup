import React from 'react';

const TodosContext = React.createContext({
  todos: [
    {
      id: 1,
      text: 'Finish bugs',
      complete: false
    },
    {
      id: 2,
      text: 'Finish practice demo',
      complete: false
    },
    {
      id: 3,
      text: 'Learn DS&A',
      complete: false
    }
  ],
  currentTodo: {}
});

export default TodosContext;

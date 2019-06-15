export default function todosReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(
        todo =>
          todo.id === action.payload.id
            ? {
                ...action.payload,
                complete: !action.payload.complete
              }
            : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };
      break;
    default:
      return state;
  }
}

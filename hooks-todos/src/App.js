import React, { useContext, useReducer } from 'react';
import { UserContext } from './index'

const initialState = {
  count: 0
}

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return initialState

  }
}

export default function App() {
  const [state, dispatch] = useReducer(countReducer, initialState)
  const value = useContext(UserContext)

  return (
    <div>
      <div>
        Hi {value}
      </div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={()=> dispatch({ type:'DECREMENT' })}>Decrement</button>
    </div>
  );
}

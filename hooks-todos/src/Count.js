import React, { useContext, useReducer } from 'react';
import { UserContext } from './index'
import {countReducer, initialState } from './countReducer.js'




export default function Count() {
  const [state, dispatch] = useReducer(countReducer, initialState)
  const value = useContext(UserContext)

  return (
    <div>
      <div>
        Hi {value}
      </div>
      Count: {state.count}
      <button
        className="border p-1"
        onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button
        className="border p-1"
        onClick={()=> dispatch({ type:'DECREMENT' })}>
        Decrement
      </button>
      <button
        className="border p-1"
        onClick={()=> dispatch({ type:'RESET' })}>
        Reset
      </button>
    </div>
  );
}

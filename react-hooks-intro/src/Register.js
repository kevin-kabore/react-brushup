import React, { useState } from 'react';

const initialFormState = {
  username: '',
  email: '',
  password: ''
}
export default function Register () {
  const [form, setForm] = useState(initialFormState)



  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <h2>Register</h2>
      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
      >
        <input
          type='text'
          placeholder='Username'
          name='username'
        />

      <input
          type='email'
          placeholder='Email Address'
          name='email'
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

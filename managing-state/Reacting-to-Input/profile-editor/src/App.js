// This form switches between two modes: in the editing mode, you see the inputs, 
// and in the viewing mode, you only see the result. The button label changes 
// between “Edit” and “Save” depending on the mode you’re in. When you change the 
// inputs, the welcome message at the bottom updates in real time.

// Your task is to reimplement it in React in the sandbox below. For your convenience, 
// the markup was already converted to JSX, but you’ll need to make it show and hide 
// the inputs like the original does.

// Make sure that it updates the text at the bottom, too!

import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}

// Se copio la solución. Revisar.
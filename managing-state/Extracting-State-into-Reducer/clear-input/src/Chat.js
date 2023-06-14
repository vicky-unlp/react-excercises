import { useState } from 'react';

export default function Chat({contact, message, dispatch}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={(e) => {
        dispatch({
            type: 'sent',
//            message: e.target.value,
        });
        alert('Sent to ' + contact.email + ': ' + message);
      }}>Send to {contact.email}</button>
    </section>
  );
}

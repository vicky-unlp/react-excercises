// In this example, after you press “Send”, there is a small delay before the message 
// is shown. Type “hello”, press Send, and then quickly edit the input again. Despite 
// your edits, the alert would still show “hello” (which was the value of state at the 
// time the button was clicked).

// Usually, this behavior is what you want in an app. However, there may be occasional 
// cases where you want some asynchronous code to read the latest version of some state. 
// Can you think of a way to make the alert show the current input text rather than what 
// it was at the time of the click?

// Original:

import { useState, useRef } from 'react';

// export default function Chat() {
//   const [text, setText] = useState('');

//   function handleSend() {
//     setTimeout(() => {
//       alert('Sending: ' + text);
//     }, 3000);
//   }

//   return (
//     <>
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         onClick={handleSend}>
//         Send
//       </button>
//     </>
//   );
// }

// Solution:

export default function Chat() {
  const [text, setText] = useState('');
  let message = useRef('');

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + message.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          message.current = e.target.value;
        }}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

// Como el estado recien se puede actualizar cuando apretamos el botón nuevamente al
// usarse setText, no podemos mostrar su nuevo valor usandolo directamente. En cambio,
// podemos definir un ref que almacene el último valor que se haya escrito en el input
// (va a activarse cuando se produzca un cambio en el valor en el campo) y que ese sea
// el valor que se muestra en el mensaje: en el estado estará almacenado el último valor
// escrito (como se ve en onChange) y como ahora se mostrará el valor del ref, aunque el
// mensaje se haya desencadenado con el valor anterior del estado igualmente mostrará el
// mensaje más nuevo.
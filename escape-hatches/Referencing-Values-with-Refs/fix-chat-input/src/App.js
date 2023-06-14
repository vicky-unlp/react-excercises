// Type a message and click “Send”. You will notice there is a three second delay before 
// you see the “Sent!” alert. During this delay, you can see an “Undo” button. Click it. 
// This “Undo” button is supposed to stop the “Sent!” message from appearing. It does this 
// by calling clearTimeout for the timeout ID saved during handleSend. However, even after 
// “Undo” is clicked, the “Sent!” message still appears. Find why it doesn’t work, and fix 
// it.

// Original:

import { useState, useRef } from 'react';

// export default function Chat() {
//   const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   let timeoutID = null;

//   function handleSend() {
//     setIsSending(true);
//     timeoutID = setTimeout(() => {
//       alert('Sent!');
//       setIsSending(false);
//     }, 3000);
//   }

//   function handleUndo() {
//     setIsSending(false);
//     clearTimeout(timeoutID);
//   }

//   return (
//     <>
//       <input
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         disabled={isSending}
//         onClick={handleSend}>
//         {isSending ? 'Sending...' : 'Send'}
//       </button>
//       {isSending &&
//         <button onClick={handleUndo}>
//           Undo
//         </button>
//       }
//     </>
//   );
// }

// Solution:

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let timeoutID = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
    </>
  );
}

// Cuando se produce la renderización nuevamente al actualizar el valor del estado luego de hacer click en
// alguno de los botones, las variables locales que tenemos se redefiniran, por lo que el valor de timeoutID
// volverá a ser 'null'. Si queremos que pueda leerse posteriormente tenemos que almacenarlo como un ref: 
// importaremos 'useRef' y lo usaremos para definir 'timeoutID', y luego actualizaremos su valor usando hooks
// y llamando 'timeoutID.current'.
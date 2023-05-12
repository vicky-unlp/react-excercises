// Here is a small form that is supposed to let the user leave some feedback. 
// When the feedback is submitted, it’s supposed to display a thank-you message. 
// However, it crashes with an error message saying “Rendered fewer hooks than 
// expected”. Can you spot the mistake and fix it?

// Original:

import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     // eslint-disable-next-line
//     const [message, setMessage] = useState('');
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// Solution:

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>Thank you!</h1>;
  }
  // eslint-disable-next-line
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert(`Sending: "${message}"`);
      setIsSent(true);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );

}

// En este caso tenemos el llamado del hook correspondiente la mensaje dentro
// de un condicional, lo cual no funciona. Tenemos que sacarlo y llamarlo en
// el nivel superior de la función y en el orden correcto. Tambien podemos sacar 
// el else extra, que no va a aportar nada.

// In this list, each Contact has state that determines whether “Show email” 
// has been pressed for it. Press “Show email” for Alice, and then tick the 
// “Show in reverse order” checkbox. You will notice that it’s Taylor’s email 
// that is expanded now, but Alice’s—which has moved to the bottom—appears collapsed.

// Fix it so that the expanded state is associated with each contact, regardless 
// of the chosen ordering.

// Original:

import { useState } from 'react';
import Contact from './Contact.js';

// export default function ContactList() {
//   const [reverse, setReverse] = useState(false);

//   const displayedContacts = [...contacts];
//   if (reverse) {
//     displayedContacts.reverse();
//   }

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           value={reverse}
//           onChange={e => {
//             setReverse(e.target.checked)
//           }}
//         />{' '}
//         Show in reverse order
//       </label>
//       <ul>
//         {displayedContacts.map((contact, i) =>
//           <li key={i}>
//             <Contact contact={contact} />
//           </li>
//         )}
//       </ul>
//     </>
//   );
// }

// Solution:

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map(contact =>
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

// Para resolver el problema debemos cambiar la key que estamos usando para cada
// uno de los elementos: en lugar de usar su indice queremos usar el id, de forma
// de asociar cada elemento con el contacto particular en lugar de su posición.
// Al resolver este ejercicio se cometió un error en el funcionamiento del método
// map: en lugar de dejar map.((contact, i) => ... ) tenemos que escribir
// map(contact => ...) dado que ya no usaremos el índice y si lo dejamos va a generar
// un mensaje de error.
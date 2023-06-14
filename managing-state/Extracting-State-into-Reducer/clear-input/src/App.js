// Currently, pressing “Send” doesn’t do anything. Add an event handler to the 
// “Send” button that will:

// * Show an alert with the recipient’s email and the message.
// * Clear the message input.

// Original:

import { useReducer } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import { initialState, messengerReducer } from './messengerReducer';

// export default function Messenger() {
//   const [state, dispatch] = useReducer(messengerReducer, initialState);
//   const message = state.message;
//   const contact = contacts.find((c) => c.id === state.selectedId);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={state.selectedId}
//         dispatch={dispatch}
//       />
//       <Chat
//         key={contact.id}
//         message={message}
//         contact={contact}
//         dispatch={dispatch}
//       />
//     </div>
//   );
// }

// const contacts = [
//   {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
//   {id: 1, name: 'Alice', email: 'alice@mail.com'},
//   {id: 2, name: 'Bob', email: 'bob@mail.com'},
// ];

// Original:

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

// En este caso decidimos agregar un caso mas al switch statement, el cual describe la acción 'sent'. 
// Esta acción hará que definamos el nuevo estado donde el mensaje pase a estar en blanco. Para poder
// usar esta acción definimos un event handler en el boton de enviar: le vamos a indicar a dispatch()
// que nuestro tipo de acción es 'sent' y agregaremos por fuera una alerta indicando que debemos mostrar
// el contenido del cuadro de texto (que se almacenará como 'message' desde que hacemos click para 
// editar el contenido del área, como vemos en el event handler que esta en este). Originalmente pusimos
// una acción extra que indicaba que se tenía que guardar el mensaje que estuviera escrito en el cuadro 
// dentro de la variable 'message' al apretar 'Send', pero termina siendo redundante porque este valor 
// ya se guardo al editar el cuadro de texto inicialmente.
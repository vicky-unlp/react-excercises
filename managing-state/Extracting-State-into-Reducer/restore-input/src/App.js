// In this example, switching between different recipients always clears the text input.
// This is because you don’t want to share a single message draft between several recipients. 
// But it would be better if your app “remembered” a draft for each contact separately, 
// restoring them when you switch contacts.

// Your task is to change the way the state is structured so that you remember a separate 
// message draft per contact. You would need to make a few changes to the reducer, the 
// initial state, and the components.

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

// Solution:

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId]; // Cambiaremos la forma de escribirlo para que accese a uno de los elements del objeto messages.
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

// Para solcuionar este problema creamos un objeto nuevo en la variable de estado InitialState, de forma que en
// lugar de un solo mensaje ahora sea un objeto que almacena un mensaje por contacto. No tiene sentido editar
// el objeto contacts porque este no se modifica, solo se lee. Luego vamos a tener que almacenar el mensaje del 
// cuadro cuando cambiemos de contacto: para esto vamos a indicarle al reductor (en el caso de que cambiemos el
// contacto) que debemos actualizar el estado definiendo que el selectedId cambiara al seleccionado, y redefiniendo
// el objeto messages que creamos al inicio. Para esto usamos la misma sintaxis: indicamos que messages se compone de
// state.messages, con la diferencia que ahora llamemos al mensaje guardado bajo la clave state.selectedId y lo
// cambiemos por el mensaje obtenido mediante el event handler de modificación del contenido del cuadro de texto.
// Por último, le indicamos al componente Messenger (el padre) que cuando tiene que cargar el mensaje que le corresponde
// en el cuadro de texto al ver un contacto busque en state.messages, particularmente en aquel cuya clave coincida con
// el id del contacto seleccionado o 'selectedId', en lugar de tomar solamente el mensaje pregrabado que teniamos antes
// almacenado como state.message.

// NUEVAMENTE SE COMETIÓ EL ERROR DE GUARDAR EL MENSAJE ESCRITO EN EL CUADRO DE TEXTO AL CAMBIAR EL USUARIO, LO CUAL
// NO ES PROBLEMÁTICO PERO SI REDUNDANTE.
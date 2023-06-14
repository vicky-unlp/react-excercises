// In the earlier examples, you imported the useReducer Hook from React. This time, 
// you will implement the useReducer Hook itself! Here is a stub to get you started. 
// It shouldn’t take more than 10 lines of code.

// To test your changes, try typing into the input or select a contact.

// Original:

import { useReducer } from './MyReact.js';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import { initialState, messengerReducer } from './messengerReducer';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
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

// Para solucionar este problema simplemente tenemos que definir en el archivo 'MyReact.js'
// que es lo que haría la función setter useReducer, el cual ya vinimos vinedo. Simplemente
// veremos que requiere un reductor y un estado inicial, y en su interior defiiremos la función
// dispatch como la venimos usando, en la que entregaremos una acción y esta se llevará a cabo.
// A diferencia de lo que haciamos hasta ahora, la funcion useReducer necesita definirse desde cero
// por lo que tenemos que definir esa función dispatch propiamente.

// ME EQUIVOQUE Y PENSE QUE LO TENIA QUE IMPLEMENTAR DESDE 0 ASI QUE VI LA SOLUCIÓN, NO HABIA
// ENTENDIDO EL EJERCICIO.
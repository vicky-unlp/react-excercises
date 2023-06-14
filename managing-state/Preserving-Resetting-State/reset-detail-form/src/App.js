// This is an editable contact list. You can edit the selected contact’s details 
// and then either press “Save” to update it, or “Reset” to undo your changes.

// When you select a different contact (for example, Alice), the state updates 
// but the form keeps showing the previous contact’s details. Fix it so that the 
// form gets reset when the selected contact changes.

// Original:

import { useState } from 'react';
import ContactList from './ContactList.js';
import EditContact from './EditContact.js';

// export default function ContactManager() {
//   const [
//     contacts,
//     setContacts
//   ] = useState(initialContacts);
//   const [
//     selectedId,
//     setSelectedId
//   ] = useState(0);
//   const selectedContact = contacts.find(c =>
//     c.id === selectedId
//   );

//   function handleSave(updatedData) {
//     const nextContacts = contacts.map(c => {
//       if (c.id === updatedData.id) {
//         return updatedData;
//       } else {
//         return c;
//       }
//     });
//     setContacts(nextContacts);
//   }

//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={selectedId}
//         onSelect={id => setSelectedId(id)}
//       />
//       <hr />
//       <EditContact
//         initialData={selectedContact}
//         onSave={handleSave}
//       />
//     </div>
//   )
// }

// const initialContacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' }
// ];

// Solution:

export default function ContactManager() {
  const [
    contacts,
    setContacts
  ] = useState(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  );

  function handleSave(updatedData) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  )
}

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

// La alternativa más sencilla para que se reinicie el formulario al cambiar de usuario
// es acordarnos de pasar una key, en este caso la cual corresponderá al id del contacto
// seleccionado guardado bajo la variable de estado SelectedId, de forma de que al cambiar
// de contacto el formulario se elimine y se renderice el que corresponda.
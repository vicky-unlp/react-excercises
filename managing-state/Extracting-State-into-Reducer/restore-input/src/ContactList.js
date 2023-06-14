export default function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={(e) => {
                  dispatch({
                    type: 'changed_selection',
                    contactId: contact.id,
//                    message: e.target.value,
                  });
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
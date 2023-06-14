export const initialState = {
    selectedId: 0,
    messages: {
        0: 'Hello, Taylor',
        1: 'Hello, Alice',
        2: 'Hello, Bob',
    },
  };
  
  export function messengerReducer(state, action) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
          messages: {
            ...state.messages,
            [state.selectedId]: action.message, // Esta es una forma de indicar que llamaremos un elemento en particular del objeto con la key [state.selectedId]
          }
        };
      }
      case 'edited_message': {
        return {
          ...state,
          message: action.message,
        };
      }
      case 'sent_message': {
        return {
          ...state,
          message: '',
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  
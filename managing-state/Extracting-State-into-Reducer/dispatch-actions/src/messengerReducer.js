export const initialState = {
    selectedId: 0,
    message: 'Hello',
  };
  
  export function messengerReducer(state, action) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
          message: '',
        };
      }
      case 'edited_message': {
        return {
          ...state,
          message: action.message,
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

// Para solucionar este ejercicio tuvimos que ver el reductor generado. Como vemos
// cuando analizamos el archivo 'App.js' vemos que cada valor que asignaremos a
// los atributos de los componentes vienen del objeto state. A su vez, cuando tenemos que
// reemplazar un valor en state, lo llamaremos del objeto action. Por eso, en el objeto action
// que vayamos a redefinir tenemos que fijarnos como llamar las variables a cambiar (por
// ejemplo, llamaremos contactId al valor del id del contacto seleccionado). En el
// archivo 'Chat.js' indicaremos que el mensaje que tomaremos viene del area de texto.
// IMPORTANTE: EL MAYOR PROBLEMA QUE SE TUVO ES EL NOMBRE DE LAS VARIABLES!!! LEER CON CUIDADO
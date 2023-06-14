// Make it so that clicking the “Search” button puts focus into the field.

// Original:

// export default function Page() {
//   return (
//     <>
//       <nav>
//         <button>Search</button>
//       </nav>
//       <input
//         placeholder="Looking for something?"
//       />
//     </>
//   );
// }

// Solution:

import { useRef } from 'react'

export default function Page() {
  const searchFocus = useRef(null);

  function handleClick() {
    searchFocus.current.focus();
  }
  
  return (
    <>
      <nav>
        <button onClick={handleClick}>
          Search
        </button>
      </nav>
      <input
        placeholder="Looking for something?"
        ref={searchFocus} 
      />
    </>
  );
}

// Para poder usar 'focus()' sobre el cuadro de entrada vamos a importar 'useRef()',
// definimos el ref a usar en la parte superior del componente y lo asignamos bajo el
// atributo 'ref' al elemento sobre el cual queremos realizar la acción, en nuestro caso,
// el <input>. Por otro lado, para que al hacer click en el botón 'Search' se haga foco
// vamos a definir un event handler que llame sobre nuestro nodo referenciado el método
// 'focus()' y se lo asignaremos al botón definiendo el atributo 'onClick'.
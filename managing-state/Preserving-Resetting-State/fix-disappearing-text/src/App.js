// This example shows a message when you press the button. However, pressing the 
// button also accidentally resets the input. Why does this happen? Fix it so that 
// pressing the button does not reset the input text.

// Original:

import { useState } from 'react';

// export default function App() {
//   const [showHint, setShowHint] = useState(false);
//   if (showHint) {
//     return (
//       <div>
//         <p><i>Hint: Your favorite city?</i></p>
//         <Form />
//         <button onClick={() => {
//           setShowHint(false);
//         }}>Hide hint</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <Form />
//       <button onClick={() => {
//         setShowHint(true);
//       }}>Show hint</button>
//     </div>
//   );
// }

// function Form() {
//   const [text, setText] = useState('');
//   return (
//     <textarea
//       value={text}
//       onChange={e => setText(e.target.value)}
//     />
//   );
// }

// Solution:

export default function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      <Form />
      {showHint ? (
        <div>
          <p><i>Hint: Your favorite city?</i></p>
          <button onClick={() => {
            setShowHint(false);
          }}>Hide hint</button>
        </div>
      ) : (
        <div>
          <button onClick={() => {
            setShowHint(true);
          }}>Show hint</button>
        </div>
      )}
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

// El problema es que estaremos renderizando el componente <Form /> en dos posiciones:
// en el if corresponderá al segundo, mientras que en el else corresponderá al primero.
// Además, cambiará el tipo de componente: en el primer caso tenemos un boton y una forma,
// mientras que en el segundo tenemos un texto y la forma. Como ya vimos, al tener dos tipos
// diferentes eso hará que React reinicie el estado cada vez que cambia el componente.
// La forma más facil de solucionar este problema es unificar las rmas de forma de que 
// <Form /> se renderice siempre en la misma posición, sacando el elemento en si de forma de
// que siempre este renderizandose y poniendo un condicional que indique que etiquetas deben 
// aparecer asociadas a este.
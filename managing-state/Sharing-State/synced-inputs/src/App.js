// These two inputs are independent. Make them stay in sync: editing one 
// input should update the other input with the same text, and vice versa.

// Original:

import { useState } from 'react';

// export default function SyncedInputs() {
//   return (
//     <>
//       <Input label="First input" />
//       <Input label="Second input" />
//     </>
//   );
// }

// function Input({ label }) {
//   const [text, setText] = useState('');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <label>
//       {label}
//       {' '}
//       <input
//         value={text}
//         onChange={handleChange}
//       />
//     </label>
//   );
// }

// Solution:

export default function SyncedInputs() {
  const [text, setText] = useState('');

  // function handleChange(e) {
  //   setText(e.target.value);
  // }

  return (
    <>
      <Input label="First input" value={text} onText={(e) => setText(e.target.value)}/>
      <Input label="Second input" value={text} onText={(e) => setText(e.target.value)}/>
    </>
  );
}

function Input({ label , onText , value }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onText}
      />
    </label>
  );
}

// Para resolverlo tuvimos que levantar el estado que se encontraba definido en el componente hijo. 
// Definimos nuevamente el estado en el padre y generamos un event handler (el cuál luego reemplazamos 
// solo por cuestiones de elección personal por la función en sí) en el componente padre y lo pasamos 
// como prop a lo componentes hijos. Por último, indicamos en la definición del componente hijo la forma
// en la que debía usar los props que se le fueron pasados (el valor a levantar como texto, el event 
// handler y la etiqueta).
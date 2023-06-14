// This form renders two <MyInput /> components.

// Press “Show form” and notice that the second field automatically gets focused. 
// This is because both of the <MyInput /> components try to focus the field inside. 
// When you call focus() for two input fields in a row, the last one always “wins”.

// Let’s say you want to focus the first field. The first MyInput component now receives 
// a boolean shouldFocus prop set to true. Change the logic so that focus() is only 
// called if the shouldFocus prop received by MyInput is true.

// Original:

import { useEffect, useRef } from 'react';

// export default function MyInput({ shouldFocus, value, onChange }) {
//   const ref = useRef(null);

//   // TODO: call focus() only if shouldFocus is true.
//   useEffect(() => {
//     ref.current.focus();
//   }, []);

//   return (
//     <input
//       ref={ref}
//       value={value}
//       onChange={onChange}
//     />
//   );
// }

// Solution:

export default function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

// En este caso, vamos a definir una dependencia del efecto: segun el valor que se le pase
// a 'shouldFocus', se hará foco en el primer cuadro de entrada. Cuando corremos la aplicación
// veremos que el segundo cuadro no se modifica: esto es debido a que, el hacer click en el 
// botón 'Show Form', el primer componente se renderizará con 'shouldFocus = {true}', mientras
// que el segundo será igual a 'false'.
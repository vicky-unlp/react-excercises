// In this example, the form renders a <MyInput /> component.

// Use the input’s focus() method to make MyInput automatically focus when it appears 
// on the screen. There is already a commented out implementation, but it doesn’t quite 
// work. Figure out why it doesn’t work, and fix it. (If you’re familiar with the 
// autoFocus attribute, pretend that it does not exist: we are reimplementing the 
// same functionality from scratch.)

// Original:

import { useEffect, useRef } from 'react';

// export default function MyInput({ value, onChange }) {
//   const ref = useRef(null);

//   // TODO: This doesn't quite work. Fix it.
//   // ref.current.focus()    

//   return (
//     <input
//       ref={ref}
//       value={value}
//       onChange={onChange}
//     />
//   );
// }

// Solution:

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, [])    

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

// El foco en el cuadro de entrada, como dijimos, tendría que realizarse solamente al montarse
// el componente por primera vez. Es un efecto secundario que no depende de la acción de un
// usuario, por lo que sería bueno declararlo como un efecto: lo pondremos dentro del hook
// useEffect, acordandonos de agregar un array vacio como segundo argumento para que no se
// corra con cada renderizado y solamente con el primero.
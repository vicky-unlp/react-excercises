// This button is supposed to toggle between showing “On” and “Off”. However, 
// it always shows “Off”. What is wrong with this code? Fix it.

// Original:

// import { useRef } from 'react';

// export default function Toggle() {
//   const isOnRef = useRef(false);

//   return (
//     <button onClick={() => {
//       isOnRef.current = !isOnRef.current;
//     }}>
//       {isOnRef.current ? 'On' : 'Off'}
//     </button>
//   );
// }

// Solution:

import { useState } from 'react';

export default function Toggle() {
  const [ isOn, setOn ] = useState(false);

  return (
    <button onClick={() => {
      setOn(!isOn);
    }}>
      {isOn ? 'On' : 'Off'}
    </button>
  );
}

// Como al hacer click en el botón no estaremos causando la re-renderización de la página
// or estar usando un ref, tenemos que cambiar el método de almacenamiento y usar estado.
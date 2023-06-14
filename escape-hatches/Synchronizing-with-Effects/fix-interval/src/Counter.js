// This Counter component displays a counter that should increment every second. 
// On mount, it calls setInterval. This causes onTick to run every second. The 
// onTick function increments the counter.

// However, instead of incrementing once per second, it increments twice. Why is 
// that? Find the cause of the bug and fix it.

// Original:

import { useState, useEffect } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     function onTick() {
//       setCount(c => c + 1);
//     }

//     setInterval(onTick, 1000);
//   }, []);

//   return <h1>{count}</h1>;
// }

// Solution:

export default function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      function onTick() {
        setCount(c => c + 1);
      }
  
      let intervalID = setInterval(onTick, 1000);

      return () => clearInterval(intervalID);
    }, []);
  
    return <h1>{count}</h1>;
}

// En este caso, la implementación en la página de la documentación se hace en modo Estricto,
// por lo que se montará dos veces cada componente. Esto hará que el intervalo sea iniciado dos
// veces y que el contador se incremente en 2 cada vez. Sin embargo, este error no es causado por 
// React sino por el código en si: lo que ocurre es que el proceso se inicializa por culpa del
// efecto que definimos pero no se le dan las herramientas para terminarlo o limpiarlo. Para
// arreglarlo le daremos una función de limpieza usando el método 'clearInterval'. De esta forma,
// luego de que se desmonte por primera vez el componente también se borrar;a el primer intervalo.
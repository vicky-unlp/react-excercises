// Here is a crosswalk light component that toggles when the button is pressed.
// Add an alert to the click handler. When the light is green and says “Walk”, 
// clicking the button should say “Stop is next”. When the light is red and says 
// “Stop”, clicking the button should say “Walk is next”.

// Original:

import { useState } from 'react';

// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Change to {walk ? 'Stop' : 'Walk'}
//       </button>
//       <h1 style={{
//         color: walk ? 'darkgreen' : 'darkred'
//       }}>
//         {walk ? 'Walk' : 'Stop'}
//       </h1>
//     </>
//   );
// }

// Solution:

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    alert((walk ? 'Stop' : 'Walk') + ' is next')
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'};
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

// Añadiremos el cuadro de mensaje y podemos comprobar que colocarlo antes
// o despues del llamado de setWalk no cambia el resultado: esto es debido a que
// el llamado se ahce con la captura del estado anterior, por lo que la nueva
// captura no influirá en el mensaje que se muestre.
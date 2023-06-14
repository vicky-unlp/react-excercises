// This Clock component receives two props: color and time. When you select a 
// different color in the select box, the Clock component receives a different 
// color prop from its parent component. However, for some reason, the displayed 
// color doesn’t update. Why? Fix the problem.

// Original:

// import { useState } from 'react';

// export default function Clock(props) {
//   const [color, setColor] = useState(props.color);
//   return (
//     <h1 style={{ color: color }}>
//       {props.time}
//     </h1>
//   );
// }

// Solution:

export default function Clock(props) {
  const color = props.color;

  return (
    <h1 style={{ color: color }}>
      {props.time}
    </h1>
  );
}

// Para soluconar el problema debemos cambiar color de una variable de 
// estado a una variable normal. Si lo dejamos como variable de estado
// no se actualizará su valor debido a que no se activará el renderizado 
// al cambiar el valor del prop.
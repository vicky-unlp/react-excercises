// This component tries to set the <h1>’s CSS class to "night" during the time 
// from midnight to six hours in the morning, and "day" at all other times. 
// However, it doesn’t work. Can you fix this component?

// Original:

// export default function Clock({ time }) {
//   let hours = time.getHours();
//   if (hours >= 0 && hours <= 6) {
//     document.getElementById('time').className = 'night';
//   } else {
//     document.getElementById('time').className = 'day';
//   }
//   return (
//     <h1 id="time">
//       {time.toLocaleTimeString()}
//     </h1>
//   );
// }

// Solution:

export default function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

// Aunque parece igual, lo importante es que en uno vamos a estar modificando 
// el DOM con lógica y luego renderizando el elemento, mientras que en el segundo caso
// estaremos asignando un valor a una variable y luego lo asignaremos como un valor ya
// definido.

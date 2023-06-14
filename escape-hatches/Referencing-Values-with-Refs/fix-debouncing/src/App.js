// In this example, all button click handlers are “debounced”. To see what this means, 
// press one of the buttons. Notice how the message appears a second later. If you press 
// the button while waiting for the message, the timer will reset. So if you keep clicking 
// the same button fast many times, the message won’t appear until a second after you 
// stop clicking. Debouncing lets you delay some action until the user “stops doing things”.

// This example works, but not quite as intended. The buttons are not independent. To see 
// the problem, click one of the buttons, and then immediately click another button. You’d 
// expect that after a delay, you would see both button’s messages. But only the last 
// button’s message shows up. The first button’s message gets lost.

// Why are the buttons interfering with each other? Find and fix the issue.

// Original:

// let timeoutID;

// function DebouncedButton({ onClick, children }) {
//   return (
//     <button onClick={() => {
//       clearTimeout(timeoutID);
//       timeoutID = setTimeout(() => {
//         onClick();
//       }, 1000);
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Dashboard() {
//   return (
//     <>
//       <DebouncedButton
//         onClick={() => alert('Spaceship launched!')}
//       >
//         Launch the spaceship
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Soup boiled!')}
//       >
//         Boil the soup
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Lullaby sung!')}
//       >
//         Sing a lullaby
//       </DebouncedButton>
//     </>
//   )
// }

// Solution:

import { useRef } from 'react'

function DebouncedButton({ onClick, children }) {
  let timeoutID = useRef(0);

  return (
    <button onClick={() => {
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}

// En el caso original estabamos almacenando el ID como una variable local, por lo que al
// hacer click el valor que contenía se reescribía. Para evitar esto y dado que no queremos
// ni necesitamos almacenarlo en el estado, definiremos un ref 'timeoutID' para cada uno de
// los botones al definirlo con la función 'DebouncedButton()'. De esta forma, cada botón tendrá
// su propio ref, el cual almacenará el ID del conteo.
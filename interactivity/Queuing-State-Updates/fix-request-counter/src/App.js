// You’re working on an art marketplace app that lets the user submit multiple orders
// for an art item at the same time. Each time the user presses the “Buy” button, the 
// “Pending” counter should increase by one. After three seconds, the “Pending” counter 
// should decrease, and the “Completed” counter should increase.

// However, the “Pending” counter does not behave as intended. When you press “Buy”, it 
// decreases to -1 (which should not be possible!). And if you click fast twice, both 
// counters seem to behave unpredictably.

// Why does this happen? Fix both counters.

// Original

import { useState } from 'react';

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   async function handleClick() {
//     setPending(pending + 1);
//     await delay(3000);
//     setPending(pending - 1);
//     setCompleted(completed + 1);
//   }

//   return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//       <button onClick={handleClick}>
//         Buy     
//       </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }


// Solution:

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// En este caso nosotros no queremos modificar el valor del contador a un nuevo estado,
// por lo cual no tiene sentido utilizar una función setter. Por lo tanto, será mejor
// si utilizamos una función updater. En el caso original lo que estará ocurriendo es que,
// como iniciamos con un valor de los contadores igual a 0 aunque hagamos click al restar
// 1 estaremos calculando 0 - 1 y causará que se vea -1.
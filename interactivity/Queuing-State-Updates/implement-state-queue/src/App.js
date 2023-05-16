// In this challenge, you will reimplement a tiny part of React from scratch! 
// It’s not as hard as it sounds.

// Scroll through the sandbox preview. Notice that it shows four test cases. 
// They correspond to the examples you’ve seen earlier on this page. Your task 
// is to implement the getFinalState function so that it returns the correct result 
// for each of those cases. If you implement it correctly, all four tests should pass.

// You will receive two arguments: baseState is the initial state (like 0), and the 
// queue is an array which contains a mix of numbers (like 5) and updater functions 
// (like n => n + 1) in the order they were added.

// Your task is to return the final state, just like the tables on this page show!

// Original:

import { getFinalState } from './processQueue.js';

// function increment(n) {
//   return n + 1;
// }
// increment.toString = () => 'n => n+1';

// export default function App() {
//   return (
//     <>
//       <TestCase
//         baseState={0}
//         queue={[1, 1, 1]}
//         expected={1}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[
//           increment,
//           increment,
//           increment
//         ]}
//         expected={3}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[
//           5,
//           increment,
//         ]}
//         expected={6}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[
//           5,
//           increment,
//           42,
//         ]}
//         expected={42}
//       />
//     </>
//   );
// }

// function TestCase({
//   baseState,
//   queue,
//   expected
// }) {
//   const actual = getFinalState(baseState, queue);
//   return (
//     <>
//       <p>Base state: <b>{baseState}</b></p>
//       <p>Queue: <b>[{queue.join(', ')}]</b></p>
//       <p>Expected result: <b>{expected}</b></p>
//       <p style={{
//         color: actual === expected ?
//           'green' :
//           'red'
//       }}>
//         Your result: <b>{actual}</b>
//         {' '}
//         ({actual === expected ?
//           'correct' :
//           'wrong'
//         })
//       </p>
//     </>
//   );
// }

// Solution:

function increment(n) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          increment,
          increment,
          increment
        ]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
        ]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
          42,
        ]}
        expected={42}
      />
    </>
  );
}

function TestCase({
  baseState,
  queue,
  expected
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{
        color: actual === expected ?
          'green' :
          'red'
      }}>
        Your result: <b>{actual}</b>
        {' '}
        ({actual === expected ?
          'correct' :
          'wrong'
        })
      </p>
    </>
  );
}

// Para resolverlo tuvimos que modificar el archivo 'processQueue.js'. Para
// tratar los casos como corresponde, en caso que la list contenga un valor
// numérico podemos tomarlo como si fuera una función setter, por lo que
// reemplazaremos el valor de finalState por dicho número. En caso de que sea
// una función, lo consideraremos similar a una función updater, llamaremos la 
// función usando como argumento el último valor de finalState y lo guardaremos 
// sobre finalState para actualizarlo.
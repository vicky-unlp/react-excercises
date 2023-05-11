// This example renders a famous haiku by Katsushika Hokusai, with each line 
// wrapped in a <p> tag. Your job is to insert an <hr /> separator between 
// each paragraph. Your resulting structure should look like this:

// <article>
//   <p>I write, erase, rewrite</p>
//   <hr />
//   <p>Erase again, and then</p>
//   <hr />
//   <p>A poppy blooms.</p>
// </article>

// A haiku only contains three lines, but your solution should work with any 
// number of lines. Note that <hr /> elements only appear between the <p> elements, 
// not in the beginning or the end!

// Original:

import { Fragment } from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

// Alternativa con lógica de JavaScript:

// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) =>
//         {if (index > 0) {
//           return (
//             <div>
//               <hr />
//               {line}
//             </div>
//           )
//         }
//         else {
//           return (
//             <p key={index}>
//               {line}
//             </p>
//           )

//         }}
//       )}
//     </article>
//   );
// }

// Alternativa con la logica correcta de React:

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <Fragment key={index}>
          {index > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}

// Recordar: cuando usamos lógica siempre hay que colocar las lineas dentro de llaves,
// haciendo la diferencia entre la lógica usada en React y JavaScript vainilla. Colocamos los
// fragmentos dentro de un elemento Fragment para evitar usar <div> y mantener todo ordenado.
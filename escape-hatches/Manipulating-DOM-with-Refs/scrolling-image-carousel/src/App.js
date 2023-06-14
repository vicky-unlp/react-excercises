// This image carousel has a “Next” button that switches the active image. Make 
// the gallery scroll horizontally to the active image on click. You will want 
// to call scrollIntoView() on the DOM node of the active image:

// node.scrollIntoView({
//   behavior: 'smooth',
//   block: 'nearest',
//   inline: 'center'
// });

// Original:

import { useState, useRef } from 'react';

// export default function CatFriends() {
//   const [index, setIndex] = useState(0);
//   return (
//     <>
//       <nav>
//         <button onClick={() => {
//           if (index < catList.length - 1) {
//             setIndex(index + 1);
//           } else {
//             setIndex(0);
//           }
//         }}>
//           Next
//         </button>
//       </nav>
//       <div>
//         <ul>
//           {catList.map((cat, i) => (
//             <li key={cat.id}>
//               <img
//                 className={
//                   index === i ?
//                     'active' :
//                     ''
//                 }
//                 src={cat.imageUrl}
//                 alt={'Cat #' + cat.id}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// const catList = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: 'https://placekitten.com/250/200?image=' + i
//   });
// }

// Solution:

import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const activeImage = useRef(null);

  return (
    <>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1) {
            flushSync(() => {
              setIndex(index + 1);
            });
          } else {
            flushSync(() => {
              setIndex(0);
            })
          }
          activeImage.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li 
              key={cat.id}
            >
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
                ref={index === i ? activeImage : null}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}

// Para resolver este ejercicio se tuvo que revisar solamente un pequeño detalle relacionado
// a la asignación del indice.

// Originalmente solo teniamos la variable de estado que almacenaba cual era la imagen
// activa, pero al apretar el botón 'Next' no se deslizaba el carrusel hasta esta. Para arreglarlo
// definimos un ref y dejamos definido en el event handler a usar sobre el botón que, al apretarse,
// se produciría el deslizamiento del carrusel hasta la imagen asignada al ref 'activeImage'. Ahora
// bien, al actualizar la variable de estado 'index' para definir cual es la imagen activa, esta
// actualización quedará en la lista y será antecedido por el scroll, en el cual como vamos a estar
// referenciando el valor de 'index' pero todavia no se habrá actualizado entonces estará asignado 
// al valor anterior. Usando 'flushSync' nos aseguramos que la actualización de la variable de estado
// se hizo de forma sincrónica y no esperó hasta la siguiente renderización, permitiendo que el valor
// que usamos de index para la imagen activa sea el correcto.

// El detalle es que, para referenciar la imagen correctamente, debemos indicarle a nuestra aplicación
// que, en caso de que el índice de la imagen en la lista coincida con el indice de la variable de estado,
// entonces se asigne dicha imagen al ref y sino tenga valor 'null'. Si no agregamos este condicional, todas
// las imagenes de dicha lista tendrán asignado el ref y el carrusel directamente saltará a la última imagen.
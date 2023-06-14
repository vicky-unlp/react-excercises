// When you press “Next”, the browser starts loading the next image. However, 
// because it’s displayed in the same <img> tag, by default you would still 
// see the previous image until the next one loads. This may be undesirable 
// if it’s important for the text to always match the image. Change it so that 
// the moment you press “Next”, the previous image immediately clears.

// Original

import { useState } from 'react';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const hasNext = index < images.length - 1;

//   function handleClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   let image = images[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h3>
//         Image {index + 1} of {images.length}
//       </h3>
//       <img src={image.src} />
//       <p>
//         {image.place}
//       </p>
//     </>
//   );
// }

// Solution:

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img key={index} src={image.src} />
      <p>
        {image.place}
      </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malaysia',
  src: 'https://i.imgur.com/FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'https://i.imgur.com/dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'https://i.imgur.com/z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'https://i.imgur.com/Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'https://i.imgur.com/JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'https://i.imgur.com/QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: 'https://i.imgur.com/3aIiwfm.jpg'
}];

// De la misma forma que en los ejercicios anteriores, al agregar una
// key al elemento <img> nos estaremos asegurando que, al cambiar el
// componente y renderizarlo, el anterior se estará eliminando en lugar
// de producirse la re-renderización y compartir el estado.
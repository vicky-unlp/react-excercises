// When you press “Next” on the last sculpture, the code crashes. Fix the logic 
// to prevent the crash. You may do this by adding extra logic to event handler 
// or by disabling the button when the action is not possible.

// After fixing the crash, add a “Previous” button that shows the previous sculpture. 
// It shouldn’t crash on the first sculpture.

// Original:

import { useState } from 'react';
import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// Solution:

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);  
    }
    else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handlePrevClick() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <button onClick={handlePrevClick}>
        Previous
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

// Lo que ocurre en este caso es que en el event handler no estamos indicando que
// hacer cuando el indice sobrepase el número de elementos que tenemos en el array.
// Tenemos que agregar la excepción, en nuestro caso, haciendo que se vuelva a index = 0.
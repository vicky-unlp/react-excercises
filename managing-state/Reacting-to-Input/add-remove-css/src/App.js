// Make it so that clicking on the picture removes the background--active CSS 
// class from the outer <div>, but adds the picture--active class to the <img>. 
// Clicking the background again should restore the original CSS classes.

// Visually, you should expect that clicking on the picture removes the purple 
// background and highlights the picture border. Clicking outside the picture 
// highlights the background, but removes the picture border highlight.

// Original:

// export default function Picture() {
//   return (
//     <div className="background background--active">
//       <img
//         className="picture"
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//       />
//     </div>
//   );
// }

// Solution:

import { useState } from 'react';

export default function Picture() {
  const [status, setStatus] = useState('active')

  let classNameDiv = 'background';
  let classNameImg = 'picture';

  if (status === 'inactive') {
    classNameImg += ' picture--active'
  }
  else {
    classNameDiv += ' backgorund--active';
  }

  function handleDivClick() {
    setStatus('active');
  }  

  function handleImageClick(e) {
    e.stopPropagation();
    setStatus('inactive');
  }

  return (
    <div className={classNameDiv} onClick={handleDivClick}>
      <img
        className={classNameImg} onClick={handleImageClick}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}

// Para resolverlo generaremos los estados correspondientes. En mi caso
// bien podría haber simplificado el proceso definiendo el estado con un booleano
// en lugar de dos términos diferentes, pero preferí dejar el que se me habia ocurrido.
// Dejamos definidas las dos clases que queremos reemplazar y la forma en la que
// se modificarán al hacer click. Luego definimos los event handlers: tenemos que
// acordarnos de añadir el e.stopPropagation() debido a que sino activará el event handler
// del fondo tambien, por lo que se volverá atras en el cambio realizado.
// When the button is clicked, this example should ask for the user’s 
// name and then display an alert greeting them. You tried to use state 
// to keep the name, but for some reason it always shows “Hello, !“.

// To fix this code, remove the unnecessary state variable.

// Original:

// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [name, setName] = useState('');

//   function handleClick() {
//     setName(prompt('What is your name?'));
//     alert(`Hello, ${name}!`);
//   }

//   return (
//     <button onClick={handleClick}>
//       Greet
//     </button>
//   );
// }

// Solution:

export default function FeedbackForm() {

  function handleClick() {
    let name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}

// Para solucionar el erro directamente sacamos la variable de estado y 
// la reemplazaremos por una variable normal. El actualizar un estado
// requiere renderizar nuevamente el componente: dicha variable de estado
// cambiará recien para el siguiente renderizado, por lo cual no se mostrará
// el cambio en nuestra pantalla hasta que no actualicemos la aplicación; de hecho
// si entramos un nombre y luego entramos otro se mostrará el primero en nuestro popup,
// y lo mismo seguirá pasando cada vez que introduzcamos un nuevo nombre.
// Por eso el usar una variable normal será más útil.

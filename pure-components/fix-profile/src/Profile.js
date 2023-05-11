// Two Profile components are rendered side by side with different data. Press 
// “Collapse” on the first profile, and then “Expand” it. You’ll notice that 
// both profiles now show the same person. This is a bug.

// Find the cause of the bug and fix it.

// Original:

import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

// let currentPerson;

// export default function Profile({ person }) {
//   currentPerson = person;
//   return (
//     <Panel>
//       <Header />
//       <Avatar />
//     </Panel>
//   )
// }

// function Header() {
//   return <h1>{currentPerson.name}</h1>;
// }

// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(currentPerson)}
//       alt={currentPerson.name}
//       width={50}
//       height={50}
//     />
//   );
// }

// Solución:

export default function Profile({ person }) {

    return (
      <Panel>
        <Header person={person}/>
        <Avatar person={person}/>
      </Panel>
    )
  }
  
  function Header({person}) {
    return <h1>{person.name}</h1>;
  }
  
  function Avatar({person}) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={50}
        height={50}
      />
    );
  }

// Lo que esta ocurriendo es que estamos modificando una variable externa. Cada vez que
// renderizamos un nuevo componente se actualizará el valor de dicha variable a aquel que
// le hayamos pasado en el momento; cuando actualizamos el componente al colapsar y expandir
// cambia el valor de 'person' que usamos para renderizarlo aún cuando le estamos pasando
// explicitamente ciertos valores: como los pasamos al renderizarlo y luego cambio el valor
// de currentPerson, al re-renderizarlo usaremos los nuevos valores porque no se actualizarán 
// a los viejos.
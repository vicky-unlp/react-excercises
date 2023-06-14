// Make it so that clicking the “Search” button puts focus into the field. Note 
// that each component is defined in a separate file and shouldn’t be moved out 
// of it. How do you connect them together?

// Original:

import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';
import { useRef } from 'react';

// export default function Page() {
//   return (
//     <>
//       <nav>
//         <SearchButton />
//       </nav>
//       <SearchInput />
//     </>
//   );
// }

// Solution:

export default function Page() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef}/>
    </>
  );
}

// Para resolverlo se hicieron modificaciones en los dos componentes (se realizaron anotaciones en
// los archivos) y luego se les entregó un event handler y un ref a los componentes. La mayor dificultad
// estuvo en determinar como dejar escrito 'SearchInput' correctamente, pues se habia visto como un
// componente en el mismo archivo y no como una función que requiriera ser exportada.
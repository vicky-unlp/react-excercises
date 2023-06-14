// Resultado propio:

// import { forwardRef } from 'react';

// export const SearchInput = forwardRef((props, ref) => {
//         return <input {...props} ref={ref} />;
// });

// Solución:

import { forwardRef } from 'react';

export default forwardRef(
  function SearchInput(props, ref) {
    return (
      <input
        ref={ref}
        placeholder="Looking for something?"
      />
    );
  }
);

// En el propio quedo mal formulado. Podemos exportar la función 'forwardRef', que tendrá
// como función atributo a 'SearchInput' (cuando la declaramos como anónima solamente indicamos 
// los atributos que se le tienen que pasar, pero nosotros lo definimos como una función con 
// nombre) y que retornará el elemento que queramos ver, en nuestro aso, un input que tenga
// como ref el ref que le vayamos a pasar como valor a 'SearchInput' y un placeholder.
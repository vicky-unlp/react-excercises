// In this example, toggling the checkbox changes the imageSize prop passed to 
// each <PlaceImage>. The checkbox state is held in the top-level App component, 
// but each <PlaceImage> needs to be aware of it.

// Currently, App passes imageSize to List, which passes it to each Place, which 
// passes it to the PlaceImage. Remove the imageSize prop, and instead pass it 
// from the App component directly to PlaceImage.

// You can declare context in Context.js.

// Original:

// import { useState } from 'react';
// import { places } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function App() {
//   const [isLarge, setIsLarge] = useState(false);
//   const imageSize = isLarge ? 150 : 100;
//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={isLarge}
//           onChange={e => {
//             setIsLarge(e.target.checked);
//           }}
//         />
//         Use large images
//       </label>
//       <hr />
//       <List imageSize={imageSize} />
//     </>
//   )
// }

// function List({ imageSize }) {
//   const listItems = places.map(place =>
//     <li key={place.id}>
//       <Place
//         place={place}
//         imageSize={imageSize}
//       />
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// function Place({ place, imageSize }) {
//   return (
//     <>
//       <PlaceImage
//         place={place}
//         imageSize={imageSize}
//       />
//       <p>
//         <b>{place.name}</b>
//         {': ' + place.description}
//       </p>
//     </>
//   );
// }

// function PlaceImage({ place, imageSize }) {
//   return (
//     <img
//       src={getImageUrl(place)}
//       alt={place.name}
//       width={imageSize}
//       height={imageSize}
//     />
//   );
// }

// Solution:

import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { sizeContext } from './Context.js'

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <sizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </sizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(sizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

// Se copio la resolución de la documentación:

// Cuando eliminamos el prop drilling tenemos que borrar todas las instancias intermedias
// de uso del valor, en este caso, ImageSize. Para cada componente, lo eliminaremos de la lista
// de atributos que pasamos y luego lo eliminamos dentro del llamado al componente hijo que lo
// estaría usando. En nuestra aplicación principal o padre, definimos cual es el valor de imageSize
// (ya estaba definido) pero en lugar de pasarlo como prop directamente entregamos el valor como
// atributo para sizeContext.Provider, de forma de definir el contexto. Para que el componente que
// queremos lo use, crearemos una variable en este que use el hook useContext y la usaremos como
// valor en width y height.

// La confusión en neustro caso pasó por pensar que era necesario pasar un atributo children entre 
// componentes intermedios: como vemos, NO NECESITAMOS PASAR NINGUN PROP, SINO QUE DIRECTAMENTE SE
// LEERÁ EL CONTEXTO USANDO USECONTEXT. Otro detalle es que el cambio de tamaño generó dudas, pero
// podemos darnos cuenta de que no tenemos que usar si o si el valor por defecto que definimos en 
// 'Context.js': definiremos en una variable los posibles valores a usar, lo unico importante es que
// luego le digamos a React que esa es la variable que le dará el valor al contexto usandolo en el 
// proveedor.
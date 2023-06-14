// In this example, the SearchBar has its own query state that controls the text 
// input. Its parent FilterableList component displays a List of items, but it 
// doesn’t take the search query into account.

// Use the filterItems(foods, query) function to filter the list according to the 
// search query. To test your changes, verify that typing “s” into the input filters 
// down the list to “Sushi”, “Shish kebab”, and “Dim sum”.

// Note that filterItems is already implemented and imported so you don’t need to 
// write it yourself!

// Original:

import { useState } from 'react';
import { foods, filterItems } from './data.js';

// export default function FilterableList() {
//   return (
//     <>
//       <SearchBar />
//       <hr />
//       <List items={foods} />
//     </>
//   );
// }

// function SearchBar() {
//   const [query, setQuery] = useState('');

//   function handleChange(e) {
//     setQuery(e.target.value);
//   }

//   return (
//     <label>
//       Search:{' '}
//       <input
//         value={query}
//         onChange={handleChange}
//       />
//     </label>
//   );
// }

// function List({ items }) {
//   return (
//     <table>
//       <tbody>
//         {items.map(food => (
//           <tr key={food.id}>
//             <td>{food.name}</td>
//             <td>{food.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// Solution:

export default function FilterableList() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar onChange={handleChange} value={query}/>
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({ onChange, value }) {

  return (
    <label>
      Search:{' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Para resolver este ejercicio iniciamos levantando el estado y el event handler al componente padre
// FilteredList, dado que queremos coordinar los dos hijos. La barra de búsqueda tendrá que recibir el
// event handler de forma de poder recuperar el valor que le pongamos como input, al cual almacenaremos
// con el nombre 'query' y asignaremos al estado del padre. Por último, en lugar de indicarle al
// componente List que nos muestre la lista total de alimentos, usaremos la función filterList para
// indicarle que tiene que mostrarnos solamente los elementos de la lista de comidas que se correspondan
// con el valor almacenado en la variable de estado 'query'.
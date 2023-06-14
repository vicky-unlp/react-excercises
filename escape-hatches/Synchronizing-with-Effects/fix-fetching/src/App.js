// This component shows the biography for the selected person. It loads the biography 
// by calling an asynchronous function fetchBio(person) on mount and whenever person 
// changes. That asynchronous function returns a Promise which eventually resolves to 
// a string. When fetching is done, it calls setBio to display that string under the 
// select box.

// There is a bug in this code. Start by selecting “Alice”. Then select “Bob” and then 
// immediately after that select “Taylor”. If you do this fast enough, you will notice 
// that bug: Taylor is selected, but the paragraph below says “This is Bob’s bio.”

// Why does this happen? Fix the bug inside this Effect.

// Origial:

import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

// export default function Page() {
//   const [person, setPerson] = useState('Alice');
//   const [bio, setBio] = useState(null);

//   useEffect(() => {
//     setBio(null);
//     fetchBio(person).then(result => {
//       setBio(result);
//     });
//   }, [person]);

//   return (
//     <>
//       <select value={person} onChange={e => {
//         setPerson(e.target.value);
//       }}>
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>
//         <option value="Taylor">Taylor</option>
//       </select>
//       <hr />
//       <p><i>{bio ?? 'Loading...'}</i></p>
//     </>
//   );
// }

// Solution:

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false;

    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true
    }
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}

// Hubo un pequeño error en la escritura inicial de la solución.

// Como vimos en la teoría, aunque no se puede cancelar un llamado podemos usar una 
// función de limpieza para ignorar el resultado. Lo que haremos es agregar una variable
// indicando si el resultado del llamado debe ser ignorado o no: inicializamos la variable
// local como 'false' y, luego de correrse 'fetch()' le indicaremos que si sigue teniendo
// ese valor se cargue la bibliografía. En caso de que cambiemos la persona en el menú,
// entonces se realizará un pedido nuevo y en el anterior se correrá la función de limpieza
// haciendo que 'ignore = true'. Esto hará que no se cargue la bibliografia vieja y sí la
// nueva.

// El error de escritura estuvo en poner el condicional por fuera del fetch, rodeando desde
// 'setBio(null)' y hasta antes del return.
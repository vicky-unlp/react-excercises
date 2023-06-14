// The TodoList below displays a list of todos. When the “Show only active todos” 
// checkbox is ticked, completed todos are not displayed in the list. Regardless 
// of which todos are visible, the footer displays the count of todos that are not 
// yet completed.

// Simplify this component by removing all the unnecessary state and Effects.

// Original:

import { useState, useEffect } from 'react';
import { initialTodos, createTodo } from './todos.js';

// export default function TodoList() {
//   const [todos, setTodos] = useState(initialTodos);
//   const [showActive, setShowActive] = useState(false);
//   const [activeTodos, setActiveTodos] = useState([]);
//   const [visibleTodos, setVisibleTodos] = useState([]);
//   const [footer, setFooter] = useState(null);

//   useEffect(() => {
//     setActiveTodos(todos.filter(todo => !todo.completed));
//   }, [todos]);

//   useEffect(() => {
//     setVisibleTodos(showActive ? activeTodos : todos);
//   }, [showActive, todos, activeTodos]);

//   useEffect(() => {
//     setFooter(
//       <footer>
//         {activeTodos.length} todos left
//       </footer>
//     );
//   }, [activeTodos]);

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={showActive}
//           onChange={e => setShowActive(e.target.checked)}
//         />
//         Show only active todos
//       </label>
//       <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
//       <ul>
//         {visibleTodos.map(todo => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//       {footer}
//     </>
//   );
// }

// function NewTodo({ onAdd }) {
//   const [text, setText] = useState('');

//   function handleAddClick() {
//     setText('');
//     onAdd(createTodo(text));
//   }

//   return (
//     <>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={handleAddClick}>
//         Add
//       </button>
//     </>
//   );
// }

// Solution:

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  //const [activeTodos, setActiveTodos] = useState([]);
  // const [visibleTodos, setVisibleTodos] = useState([]);
  // const [footer, setFooter] = useState(null);
  let activeTodos = [];
  let visibleTodos = [];

  activeTodos = todos.filter(todo => !todo.completed);
  visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} todos left
      </footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}

// En este código las dos únicas piezas de estado necesarias son la lista 'todos' y 'showActive', que
// representa si el cuadro de 'Se completó' esta seleccionado. El resto de las variables de estado son
// redundantes y pueden ser reemplazadas por variables locales que serán calculadas durante la renderización.
// El footer, por otro lado, es solo una estructura de JSX que se puede mover al return.
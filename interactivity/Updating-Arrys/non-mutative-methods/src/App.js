// In this example, all of the event handlers in App.js use mutation. As a result, 
// editing and deleting todos doesn’t work. Rewrite handleAddTodo, handleChangeTodo, 
// and handleDeleteTodo to use the non-mutative methods:

// Original:

import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: 'Buy milk', done: true },
//   { id: 1, title: 'Eat tacos', done: false },
//   { id: 2, title: 'Brew tea', done: false },
// ];

// export default function TaskApp() {
//   const [todos, setTodos] = useState(
//     initialTodos
//   );

//   function handleAddTodo(title) {
//     todos.push({
//       id: nextId++,
//       title: title,
//       done: false
//     });
//   }

//   function handleChangeTodo(nextTodo) {
//     const todo = todos.find(t =>
//       t.id === nextTodo.id
//     );
//     todo.title = nextTodo.title;
//     todo.done = nextTodo.done;
//   }

//   function handleDeleteTodo(todoId) {
//     const index = todos.findIndex(t =>
//       t.id === todoId
//     );
//     todos.splice(index, 1);
//   }

//   return (
//     <>
//       <AddTodo
//         onAddTodo={handleAddTodo}
//       />
//       <TaskList
//         todos={todos}
//         onChangeTodo={handleChangeTodo}
//         onDeleteTodo={handleDeleteTodo}
//       />
//     </>
//   );
// }

// Solution:

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {id: nextId++, title: title, done: false}
    ])
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      }
      else {
        return todo;
      }
    }))
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(todo => 
      todo.id !== todoId
    ))}

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
  }

// Para resolverlo iremos paso a paso: en caso de añadir una tarea directamente
// copiaremos la lista y añadiremos el nuevo valor. En caso de querer modificarla
// usaremos map() de forma de que, en aso que el id del elemento seleccionado sea 
// el correcto, se devolverá un nuevo elemento newtTodo. Por último, en caso de 
// quere eliminar un elemento simplemente usaremos filter() para mostrar todos
// aquellos que tengan un id diferente al del elemento seleccionado.

// Queda poco claro de donde sale nextTodo...
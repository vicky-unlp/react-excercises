// The CEO of your company is asking you to add “stories” to your online 
// clock app, and you can’t say no. You’ve written a StoryTray component 
// that accepts a list of stories, followed by a “Create Story” placeholder.

// You implemented the “Create Story” placeholder by pushing one more fake 
// story at the end of the stories array that you receive as a prop. But for 
// some reason, “Create Story” appears more than once. Fix the issue.

// Original:

// export default function StoryTray({ stories }) {
//   stories.push({
//     id: 'create',
//     label: 'Create Story'
//   });

//   return (
//     <ul>
//       {stories.map(story => (
//         <li key={story.id}>
//           {story.label}
//         </li>
//       ))}
//     </ul>
//   );
// }

// Solution:

export default function StoryTray({ stories }) {  
    return (
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
        <li>Create Story</li>
      </ul>
    );
}

// Lo que ocurre es que, nuevamente, vamos a estar modificando una variable definida previamente,
// en este caso, el array 'stories' que pasamos como prop. La forma más sencilla de solucionar
// este problema es eliminando esta edición y renderizando la historia extra directamente. Sino,
// podemos copiar el array y modificar este.

// export default function StoryTray({ stories }) {
//     // Copy the array!
//     let storiesToDisplay = stories.slice();
  
//     // Does not affect the original array:
//     storiesToDisplay.push({
//       id: 'create',
//       label: 'Create Story'
//     });
  
//     return (
//       <ul>
//         {storiesToDisplay.map(story => (
//           <li key={story.id}>
//             {story.label}
//           </li>
//         ))}
//       </ul>
//     );
//   }
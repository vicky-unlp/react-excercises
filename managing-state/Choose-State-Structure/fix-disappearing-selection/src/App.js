// There is a list of letters in state. When you hover or focus a particular 
// letter, it gets highlighted. The currently highlighted letter is stored in 
// the highlightedLetter state variable. You can “star” and “unstar” individual 
// letters, which updates the letters array in state.

// This code works, but there is a minor UI glitch. When you press “Star” or 
// “Unstar”, the highlighting disappears for a moment. However, it reappears as 
// soon as you move your pointer or switch to another letter with keyboard. Why 
// is this happening? Fix it so that the highlighting doesn’t disappear after 
// the button click.

// Original:

import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

// export default function MailClient() {
//   const [letters, setLetters] = useState(initialLetters);
//   const [highlightedLetter, setHighlightedLetter] = useState(null);

//   function handleHover(letter) {
//     setHighlightedLetter(letter);
//   }

//   function handleStar(starred) {
//     setLetters(letters.map(letter => {
//       if (letter.id === starred.id) {
//         return {
//           ...letter,
//           isStarred: !letter.isStarred
//         };
//       } else {
//         return letter;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>Inbox</h2>
//       <ul>
//         {letters.map(letter => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isHighlighted={
//               letter === highlightedLetter
//             }
//             onHover={handleHover}
//             onToggleStar={handleStar}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }

// Solution:

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId ] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}

// Se copio el resultado pero no se puede renderizar correctamente la solución. Se produce
// duplicación de estado: en lugar de almacenar dos veces un item letter se puede almacenar
// su ID.
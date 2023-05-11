// Change the Avatar component to request the closest image size based on the size prop. 
// Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) 
// to the getImageUrl function. Verify that your changes work by rendering avatars with 
// different values of the size prop and opening images in a new tab.

// Original:

import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, 'b')}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={40}
//       person={{ 
//         name: 'Gregorio Y. Zara', 
//         imageId: '7vQD0fP'
//       }}
//     />
//   );
// }

// Solution:

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}

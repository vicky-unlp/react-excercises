// Original:

// export default function SearchButton({ onClick }) {
//     return (
//       <button onClick={onClick}>
//         Search
//       </button>
//     );
//   }
  
// Solution:

export default function SearchButton( onClick ) {
    return (
      <button onClick={onClick}>
        Search
      </button>
    );
  }
  
// Tenemos que acordarnos de pasar como atributo el event handler que vayamos a usar.
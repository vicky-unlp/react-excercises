// Extract a Card component from the markup below, and use the children prop to pass different JSX to it:

// Original:

// export default function Profile() {
//   return (
//     <div>
//       <div className="card">
//         <div className="card-content">
//           <h1>Photo</h1>
//           <img
//             className="avatar"
//             src="https://i.imgur.com/OKS67lhm.jpg"
//             alt="Aklilu Lemma"
//             width={70}
//             height={70}
//           />
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-content">
//           <h1>About</h1>
//           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// Solution:

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}
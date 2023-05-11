// This ColorSwitch component renders a button. It’s supposed to change 
// the page color. Wire it up to the onChangeColor event handler prop it 
// receives from the parent so that clicking the button changes the color.

// After you do this, notice that clicking the button also increments the 
// page click counter. Your colleague who wrote the parent component insists 
// that onChangeColor does not increment any counters. What else might be 
// happening? Fix it so that clicking the button only changes the color, and 
// does not increment the counter.

// Original:

// export default function ColorSwitch({
//     onChangeColor
//   }) {
//     return (
//       <button>
//         Change color
//       </button>
//     );
//   }

// Solution:

export default function ColorSwitch({
    onChangeColor
  }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onChangeColor();
      }}>
        Change color
      </button>
    );
}

// Cuando renderizamos la aplicación veremos, primero, que al apretar el botón 
// solamente aumenta el contador: primero que nada tenemos que pasar el event handler.
// Sin embargo, al hacer click seguirá aumentando el contador, y podremos observar que
// si apretamos en cualquier otro lugar de la página tambien lo hara: esto quiere decir
// que tendremos un evento en el contenedor padre. Para evitarlo tendremos que parar la 
// propagación y luego llamar la función como tal dentro del event handler.
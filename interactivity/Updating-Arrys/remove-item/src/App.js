// This shopping cart has a working ”+” button, but the ”–” button doesn’t do anything. 
// You need to add an event handler to it so that pressing it decreases the count of the 
// corresponding product. If you press ”–” when the count is 1, the product should 
// automatically get removed from the cart. Make sure it never shows 0.

// Original:

import { useState } from 'react';

// const initialProducts = [{
//   id: 0,
//   name: 'Baklava',
//   count: 1,
// }, {
//   id: 1,
//   name: 'Cheese',
//   count: 5,
// }, {
//   id: 2,
//   name: 'Spaghetti',
//   count: 2,
// }];

// export default function ShoppingCart() {
//   const [
//     products,
//     setProducts
//   ] = useState(initialProducts)

//   function handleIncreaseClick(productId) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count + 1
//         };
//       } else {
//         return product;
//       }
//     }))
//   }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//           <button>
//             –
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Solution:

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    let productList = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        }
      } else {
        return product
      }
    })

    productList = productList.filter(product => product.count > 0);
    setProducts(productList);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

// Para resolver este ejercicio iniciamos creando el event handler. Como vamos
// a filtrar los elementos antes de renderizarlos vamos a crear una variable usando
// la función map, en la cual indicaremos que al apretar el boton se reducirá el 
// número del contador (si no se aprieta se devuelve el objeto original). Para 
// solucionar que el contador llegue a 0 vamos a tomar la variable y a actualizarla
// usando filter(): nos quedaremos con aquellos productos con un contador mayor a 0. Por
// último vamos a usar la función setter sobre nuestra lista actualizada para renderizarla.
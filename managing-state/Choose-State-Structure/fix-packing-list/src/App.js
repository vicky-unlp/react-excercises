// This packing list has a footer that shows how many items are packed, 
// and how many items there are overall. It seems to work at first, but 
// it is buggy. For example, if you mark an item as packed and then delete 
// it, the counter will not be updated correctly. Fix the counter so that 
// it’s always correct.

// Original:

import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

// let nextId = 3;
// const initialItems = [
//   { id: 0, title: 'Warm socks', packed: true },
//   { id: 1, title: 'Travel journal', packed: false },
//   { id: 2, title: 'Watercolors', packed: false },
// ];

// export default function TravelPlan() {
//   const [items, setItems] = useState(initialItems);
//   const [total, setTotal] = useState(3);
//   const [packed, setPacked] = useState(1);

//   function handleAddItem(title) {
//     setTotal(total + 1);
//     setItems([
//       ...items,
//       {
//         id: nextId++,
//         title: title,
//         packed: false
//       }
//     ]);
//   }

//   function handleChangeItem(nextItem) {
//     if (nextItem.packed) {
//       setPacked(packed + 1);
//     } else {
//       setPacked(packed - 1);
//     }
//     setItems(items.map(item => {
//       if (item.id === nextItem.id) {
//         return nextItem;
//       } else {
//         return item;
//       }
//     }));
//   }

//   function handleDeleteItem(itemId) {
//     setTotal(total - 1);
//     setItems(
//       items.filter(item => item.id !== itemId)
//     );
//   }

//   return (
//     <>  
//       <AddItem
//         onAddItem={handleAddItem}
//       />
//       <PackingList
//         items={items}
//         onChangeItem={handleChangeItem}
//         onDeleteItem={handleDeleteItem}
//       />
//       <hr />
//       <b>{packed} out of {total} packed!</b>
//     </>
//   );
// }

// Solution:

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);

  let total = items.length;
  let packed = items.filter(item => item.packed === true).length;

  function handleAddItem(title) {
    total = total + 1;
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem) {
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    setItems(
      items.filter(item => item.id !== itemId)
    );

  }

  return (
    <>  
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}

// Tenemos dos varibles de estado redundantes: total y packed, las cuales 
// no se actualizaran a menos que modifiquemos los event handlers. Aunque
// podemos hacerlo, como son valores que podemos calcular usando variables
// comunes conviene que procedamos de esa forma.
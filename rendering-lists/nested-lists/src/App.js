// Make a list of recipes from this array! For each recipe in the array, 
// display its name as an <h2> and list its ingredients in a <ul>.

// Original:

import { recipes } from './data.js';

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//     </div>
//   );
// }

// Solution:

export default function RecipeList() {
  const list = recipes.map(recipe =>
    <li key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>)}
      </ul>
    </li>
  )

  return (
    <div>
      <h1>Recipes</h1>
      <ul>{list}</ul>
    </div>
  );
}

// This RecipeList component contains two nested map calls. To simplify it, 
// extract a Recipe component from it which will accept id, name, and ingredients 
// props. Where do you place the outer key and why?

//  Original: 

import { recipes } from './data.js';

// export default function RecipeList() {
//     return (
//       <div>
//         <h1>Recipes</h1>
//         {recipes.map(recipe =>
//           <div key={recipe.id}>
//             <h2>{recipe.name}</h2>
//             <ul>
//               {recipe.ingredients.map(ingredient =>
//                 <li key={ingredient}>
//                   {ingredient}
//                 </li>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   }

// Solution:

function Recipe({id, name, ingredients}) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <Recipe 
                    id={recipe.id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    key={recipe.id} 
                />
            )}
        </div>
    );
  }

// Dato: en lugar de poner cada uno de los props por separado podemos poner <Recipe {...recipe} key={recipe.id} />
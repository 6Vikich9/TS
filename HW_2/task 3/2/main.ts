/*#whXxOBlYS0H
– взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.*/


interface IRecipe
{
    id:number;
    name:string;
    ingredients:string;
    instructions:string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings:number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

interface IRecipesResponse
{
    recipes: IRecipe[];
    total: number;
    skip: number;
    limit: number;
}

const recipesDiv:HTMLDivElement = document.createElement('div');
document.body.appendChild(recipesDiv);
fetch('https://dummyjson.com/recipes')
    .then((res:Response) => res.json())
    .then(
        (recipesObj:IRecipesResponse) =>
        {
            console.log(recipesObj);
            const recipes:IRecipe[] = recipesObj.recipes;
            console.log(recipes);

            for (const recipe of recipes)
            {
                const recipeItem:HTMLDivElement = document.createElement('div');
                recipeItem.classList.add('recipe-item');

                const idNameP:HTMLParagraphElement = document.createElement('p');
                idNameP.classList.add('id-name');
                idNameP. innerText = `Id: ${recipe.id} Name: ${recipe.name}`;

                const ingredientDiv:HTMLDivElement = document.createElement('div');
                ingredientDiv.classList.add('ingredient-div');

                const ingredientP:HTMLParagraphElement = document.createElement('p');
                ingredientP.classList.add('ingredient-p');
                ingredientP. innerText = `Ingredient: `;

                const ingredientsUl: HTMLUListElement = document.createElement('ul');

                for( const ingredient of recipe.ingredients)
                {
                    const ingredientItem:HTMLElement = document.createElement('li');
                    ingredientItem.classList.add('ingredient-item');
                    ingredientItem.innerText = `${ingredient}`;
                    ingredientDiv.appendChild(ingredientItem);
                }

                const instructionDiv:HTMLDivElement = document.createElement('div');
                instructionDiv.classList.add('instruction-div');

                const instructionP:HTMLParagraphElement = document.createElement('p');
                instructionP.classList.add('instruction-p');
                instructionP. innerText = `Instruction: `;

                for( const instruction of recipe.instructions)
                {
                    const instructionItem:HTMLDivElement = document.createElement('div');
                    instructionItem.classList.add('instruction-item');
                    instructionItem.innerText = `${instruction}`;
                    instructionDiv.appendChild(instructionItem);
                }

                const InfoDiv:HTMLDivElement = document.createElement('div');
                InfoDiv.classList.add('info-div');
                InfoDiv.innerText = `Preparing time: ${recipe.prepTimeMinutes} min\n Cooking time:${recipe.cookTimeMinutes} min\n Servings: ${recipe.servings} people\n Difficulty: ${recipe.difficulty}\n Cuisine: ${recipe.cuisine}\n Calories per serving: ${recipe.caloriesPerServing}`;

                const tagsDiv:HTMLDivElement = document.createElement('div');
                tagsDiv.classList.add('tags-div');

                const tagsP:HTMLParagraphElement = document.createElement('p');
                tagsP.classList.add('tags-p');
                tagsP. innerText = `Tags: `;

                for (const tag of recipe.tags)
                {
                    const tagItem:HTMLDivElement = document.createElement('div');
                    tagItem.classList.add('tag-item');
                    tagItem.innerText = `${tag}`;
                    tagsDiv.appendChild(tagItem);
                }

                const otherInfoDiv:HTMLDivElement = document.createElement('div');
                otherInfoDiv.classList.add('other-info-div');
                otherInfoDiv.innerText = `UserId: ${recipe.userId}\n ${recipe.image}\n Rating: ${recipe.rating}\n Review count: ${recipe.reviewCount} `;

                const mealDiv:HTMLDivElement = document.createElement('div');
                mealDiv.classList.add('meal-div');

                const mealP:HTMLParagraphElement = document.createElement('p');
                mealP.classList.add('meal-p');
                mealP.innerText = `Meal type: `;

                for (const mealType of recipe.mealType) {
                    const mealItem:HTMLDivElement = document.createElement('div');
                    mealItem.classList.add('meal-item');
                    mealItem.innerText = `${mealType}`;
                    mealDiv.appendChild(mealItem);
                }

                recipeItem.append(idNameP, ingredientP, ingredientsUl, ingredientDiv, instructionP, instructionDiv, InfoDiv, tagsP, tagsDiv, otherInfoDiv, mealP, mealDiv)

                recipesDiv.appendChild(document.createElement('br'));
                recipesDiv.appendChild(recipeItem);


            }
        }

    )

import { Subject } from 'rxjs/Subject';
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{    
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'CheeseBurger', 
            'Best CheeseBurger', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/375px-Cheeseburger.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('Buns',2)
            ]),
        new Recipe(
            'Pizza', 
            'Best Pizza', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/375px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
            [
                new Ingredient('Bread',1),
                new Ingredient('Sauce',2)
            ]),
      ];

      getRecipe(){
          return this.recipes.slice();
      }
      getRecipeFromId(index:number){
          return this.recipes[index];
      }
      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
          this.recipes[index]= newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    ingredientsChanged = new Subject<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }
    addItem(item:Ingredient){
        this.ingredients.push(item);
        this.ingredientsChanged.next(this.ingredients)
      }
    
}
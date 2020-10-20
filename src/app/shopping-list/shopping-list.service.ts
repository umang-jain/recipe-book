import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    getIngredients(){
        return this.ingredients.slice();
    }
    addItem(item:Ingredient){
        this.ingredients.push(item);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    
    updateIngredient(index:number, newIngredient:Ingredient){
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice())
    }
    getIngredient(index:number){
      return this.ingredients[index];
    }

    deleteIngredient(index:number){
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice())
    }
}
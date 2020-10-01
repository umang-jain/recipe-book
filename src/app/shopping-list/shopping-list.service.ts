import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }
    addItem(item:Ingredient){
        this.ingredients.push(item);
        this.ingredientsChanged.emit(this.ingredients)
      }
    
}
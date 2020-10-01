import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe:Recipe;
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
        
  }
  sendToShoppingList(recipe:Recipe){
    recipe.ingredients.forEach((i) => {
      this.shoppingService.addItem(i);
    })
  }
}

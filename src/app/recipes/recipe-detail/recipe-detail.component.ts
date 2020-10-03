import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService, private shoppingService:ShoppingListService,private route:ActivatedRoute) { }

  ngOnInit() {
        this.route.params.subscribe(params => {
          this.id = +this.route.snapshot.params['id'];        
          this.selectedRecipe = this.recipeService.getRecipe()[this.id];
        })
  }
  sendToShoppingList(recipe:Recipe){
    recipe.ingredients.forEach((i) => {
      this.shoppingService.addItem(i);
    })
  }
}

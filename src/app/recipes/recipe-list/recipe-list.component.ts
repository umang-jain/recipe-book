import { Subscription } from 'rxjs';
import { Component, ElementRef, EventEmitter, OnInit, Output ,OnDestroy} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  subs:Subscription;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.subs = this.recipeService.recipesChanged.subscribe((recipes:Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipe();
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}

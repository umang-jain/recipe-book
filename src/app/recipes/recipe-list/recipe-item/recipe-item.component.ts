import { Component, ElementRef, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter();
  @Input() recipe:Recipe;
  constructor() { }

  ngOnInit() {
    
  }

  onRecipeClicked(){
    this.recipeClicked.emit();
  }
}

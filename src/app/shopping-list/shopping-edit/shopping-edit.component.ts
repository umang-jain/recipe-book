import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('f',{static:true}) slForm:NgForm;

  private subscription:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Ingredient;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe((index:number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form:NgForm){
    const value  = form.value;
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editedItemIndex,new Ingredient(value.name,value.amount))
    }else{
      this.shoppingService.addItem(new Ingredient(value.name,value.amount));
    }
    form.reset();
    this.editMode = false;
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.onClear();
    this.shoppingService.deleteIngredient(this.editedItemIndex);
  }
}

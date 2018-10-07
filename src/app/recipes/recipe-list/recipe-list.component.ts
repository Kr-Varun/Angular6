import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipes: Recipe[] = [
    new Recipe('A Test Recipe of Pasta', 'A Test Recipe of Pasta', 'https://images.media-allrecipes.com/userphotos/600x600/4573350.jpg' ),
    new Recipe('This is a Recipe of chicken', 'This is a Recipe of chicken', 'https://healthbeginswithmom.com/wp-content/uploads/2017/04/Colombian-chicken-stew-with-tomatoes-potatoes-and-onion.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

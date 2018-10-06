import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Recipe', 'https://images.media-allrecipes.com/userphotos/600x600/4573350.jpg' ),
    new Recipe('A Test Recipe', 'This is a Recipe', 'https://images.media-allrecipes.com/userphotos/600x600/4573350.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

}

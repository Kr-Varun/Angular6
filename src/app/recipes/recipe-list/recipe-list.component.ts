import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Recipe', 'https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj4zoWqiOjdAhXLuY8KHUf2DdQQjRx6BAgBEAU&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F1018068-chicken-paprikash&psig=AOvVaw1TNUVQ1UXXQigUQ6zya95r&ust=1538580279059669' )
  ];

  constructor() { }

  ngOnInit() {
  }

}

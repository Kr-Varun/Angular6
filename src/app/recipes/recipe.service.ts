import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe of Pasta',
            'A Test Recipe of Pasta',
            'https://images.media-allrecipes.com/userphotos/600x600/4573350.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)

            ]),
        new Recipe(
            'This is a Recipe of chicken',
            'This is a Recipe of chicken',
            'https://healthbeginswithmom.com/wp-content/uploads/2017/04/Colombian-chicken-stew-with-tomatoes-potatoes-and-onion.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    public recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}
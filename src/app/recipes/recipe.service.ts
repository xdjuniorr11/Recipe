import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Salsa Macha',
      'Salsa macha—typically a combination of fried chile flakes, garlic, and toasted nuts and seeds, all suspended in flavorful oil!',
      'https://assets.epicurious.com/photos/614e31c6beba971e619011f8/16:9/w_2560%2Cc_limit/SalsaMacha_HERO_092221_4255_VOG_final.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Chilaquiles Verdes',
      'deliciosos y tradicionales chilaquiles verdes',
      'https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/09/Depositphotos_316014688_xl-2015-scaled.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

import { Recipe } from "./recipe.model";
export  class RecipesService{

    private recipes: Recipe[] = [
        new Recipe('Salsa Macha', 'typically a combination of fried chile flakes, garlic, and toasted nuts and seeds, all suspended in flavorful oil', 'https://assets.epicurious.com/photos/614e31c6beba971e619011f8/16:9/w_2560%2Cc_limit/SalsaMacha_HERO_092221_4255_VOG_final.jpg'),
        new Recipe('Chilaquiles Verdes', 'Los chilaquiles son de los platillos más cotidianos y deliciosos de México.', 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/09/Depositphotos_316014688_xl-2015-scaled.jpg')
      ];

    getRecipes(){
        return  this.recipes.slice()
    }
}
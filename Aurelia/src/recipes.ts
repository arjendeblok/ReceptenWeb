import { inject } from 'aurelia-framework';
import { RecipeService } from './recipeService';

@inject(RecipeService)
export class Recipes {
  recipes: IRecipe[];

  constructor(private service: IRecipeService) {
  }

  // called when the view is shown
  async activate(params): Promise<void> {
    try {
      await this.service.initialize();
      const recipes = await this.service.retrieve();
      this.recipes = recipes;
    }
    catch (error) {
      alert('Error during retrieving recipes');
    }
  }
}
import './setup';
import { HttpClient } from 'aurelia-fetch-client';
import { Recipes } from '../../src/recipes';
import { RecipeService } from '../../src/RecipeService'

const recipeStub: IRecipe = { Id: 1, Title: "Stub", Subtitle: "Stub", Ingredients: [], Preparations: [] };

class RecipeServiceStub extends RecipeService {
  retrieve(): Promise<IRecipe[]> {
    return Promise.resolve([recipeStub]);
  }
}

describe('the Recipes module', () => {
  let sut: Recipes;
  let mockedService;

  beforeEach(() => {
    mockedService = new RecipeServiceStub(() => { return new HttpClient(); });
    sut = new Recipes(mockedService);
  });

  it('should receive all recipes when activating', () => {
    sut.activate(null)
      .then(() => {
        expect(sut.recipes).toBe([recipeStub]);
      });
  });
});

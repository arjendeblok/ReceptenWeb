import { inject } from 'aurelia-framework';
import { RecipeService } from './recipeService';
import { Router } from 'aurelia-router';

@inject(RecipeService, Router)
export class NewRecipe {

  heading: string = "";
  action: string = "";

  recipe: IRecipe = {
    Id: 0,
    Title: "",
    Subtitle: "",
    Ingredients: [],
    Preparations: []
  };

  newIngredient: IIngredient = {
    Name: "",
    Count: 1,
    Dimension: ""
  };

  newStep: string = "";
  submitCalled: boolean = false;

  constructor(public service: RecipeService, public router: Router) {
  }

  async activate(params): Promise<void> {
    this.service.initialize();

    if (params.id === undefined) {
      this.heading = "Nieuw Recept";
      this.action = "Toevoegen";
    } else {
      this.heading = "Bewerken Recept";
      this.action = "Aanpassen";
      this.load(params.id);
    }

    setTimeout(function () {
      $('select').material_select();
    }, 50);
  }

  load(id: number) {
    this.service.get(id)
      .then((recipe) => this.recipe = recipe)
      .catch((error) => alert(error));
  }

  addIngredient() {
    this.recipe.Ingredients.push(this.newIngredient);

    this.newIngredient = {
      Name: "",
      Count: 1,
      Dimension: ""
    }
  }

  removeIngredient(ingredient: IIngredient) {
    var index = this.recipe.Ingredients.indexOf(ingredient);
    if (index >= 0) {
      this.recipe.Ingredients.splice(index, 1);
    }
  }

  addStep() {
    this.recipe.Preparations.push(this.newStep);
    this.newStep = "";
  }

  removeStep(step: string) {
    var index = this.recipe.Preparations.indexOf(step);
    if (index >= 0) {
      this.recipe.Preparations.splice(index, 1);
    }
  }

  get titleInvalid(): boolean {
    return this.recipe.Title == "";
  }

  get subtitleInvalid(): boolean {
    return this.recipe.Subtitle == "";
  }

  get ingredientsInvalid(): boolean {
    return this.recipe.Ingredients.length == 0;
  }

  get preparationsInvalid(): boolean {
    return this.recipe.Preparations.length == 0;
  }

  get recipeInvalid(): boolean {
    return this.titleInvalid || this.subtitleInvalid || this.ingredientsInvalid || this.preparationsInvalid;
  }

  submit() {
    this.submitCalled = true;

    if (!this.recipeInvalid) {
      this.service.post(this.recipe)
        .then((id) => {
          this.router.navigateToRoute("Recipes");
        });
    }
  }

  canDeactivate(): boolean {
    if (!this.submitCalled) {
      return confirm('Wilt u de wijzigingen annuleren?');
    }
    return true;
  }
}

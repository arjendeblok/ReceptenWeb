/**** Arjen de Blok
App entry. Matches aurelia.setRoot('app'); in main.ts
*****/ 

import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  // configure the router
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'ReceptenWeb';
    config.map([
      { route: ['', 'recipes'], name: 'Recipes',     moduleId: './recipes',  nav: true, title: 'Recepten' },
      { route: 'new',           name: 'NewRecipe',   moduleId: './editRecipe',   nav: false, title: 'Nieuw Recept' },
      { route: 'edit/:id',      name: 'EditRecipe',  moduleId: './editRecipe',   nav: false, title: 'Edit Recept' },
      { route: 'info',          name: 'info',        moduleId: './info',     nav: true, title: 'Informatie' }
    ]);

    this.router = router;
  }
}

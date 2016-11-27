import './setup';
import {App} from '../../src/app';
import {Router, RouterConfiguration} from 'aurelia-router';

class RouterStub {
  routes;
  
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  let sut;
  let mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('ReceptenWeb');
  });

  it('should have a recipes route', () => {
    expect(sut.router.routes).toContain({ route: ['', 'recipes'], name: 'Recipes',     moduleId: './recipes',  nav: true, title: 'Recepten' });    
  });
});

import {PageObject_Welcome} from './welcome.po';
import {PageObject_Skeleton} from './skeleton.po';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

describe('recipeweb', function() {
  let po_welcome: PageObject_Welcome;
  let po_skeleton: PageObject_Skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    browser.loadAndWaitForAureliaPage(`http://localhost:19876`);
  });

  it('should load the page and display the initial page title', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Recepten | ReceptenWeb');
  });

  it('should navigate to new recipe page', () => {
    po_skeleton.navigateTo('#/new');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Nieuw Recept | ReceptenWeb');
  });
});

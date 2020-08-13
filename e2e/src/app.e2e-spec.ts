import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
 
    expect(page.getTitleText()).toEqual('raki-dev-app app is running!');
  });

  it('should display relevent commands based on selection', () => {
  page.navigateTo();

  const searchResults = element.all(by.css('.card.card-small'));
  expect(searchResults.count()).toBe(7);
  const btn = searchResults.get(2);
  btn.click();
  const terminal = element(by.css('.terminal pre')).getText();
  browser.sleep(10000);

  expect(terminal).toEqual('ng add @angular/material');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

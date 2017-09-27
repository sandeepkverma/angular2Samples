import { Myappangular2Page } from './app.po';

describe('myappangular2 App', () => {
  let page: Myappangular2Page;

  beforeEach(() => {
    page = new Myappangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

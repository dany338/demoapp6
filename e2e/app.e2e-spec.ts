import { Demoapp6Page } from './app.po';

describe('demoapp6 App', () => {
  let page: Demoapp6Page;

  beforeEach(() => {
    page = new Demoapp6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

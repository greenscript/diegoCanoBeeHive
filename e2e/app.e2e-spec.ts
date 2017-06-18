import { Examen1web20Page } from './app.po';

describe('examen1web20 App', () => {
  let page: Examen1web20Page;

  beforeEach(() => {
    page = new Examen1web20Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

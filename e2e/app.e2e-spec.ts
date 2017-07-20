import { BandsRockPage } from './app.po';

describe('bands-rock App', () => {
  let page: BandsRockPage;

  beforeEach(() => {
    page = new BandsRockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

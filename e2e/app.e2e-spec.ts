import { CompanyProfilePage } from './app.po';

describe('company-profile App', () => {
  let page: CompanyProfilePage;

  beforeEach(() => {
    page = new CompanyProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

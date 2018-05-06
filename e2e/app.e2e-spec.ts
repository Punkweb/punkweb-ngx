import { AppPage } from './app.po';

describe('punkweb-ngx-template App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should open a confirm modal when open modal button is clicked', () => {
    page.navigateTo();
    page.getOpenModalButton().click();
    expect(page.getConfirmModal().isPresent());
  });
});

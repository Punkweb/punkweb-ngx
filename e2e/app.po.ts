import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getOpenModalButton() {
    return element(by.cssContainingText('button', 'Open Modal'));
  }

  getConfirmModal() {
    return element(by.tagName('modal-confirm'));
  }
}

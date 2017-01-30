import { InvoiceKokoStylePage } from './app.po';

describe('invoice-koko-style App', function() {
  let page: InvoiceKokoStylePage;

  beforeEach(() => {
    page = new InvoiceKokoStylePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

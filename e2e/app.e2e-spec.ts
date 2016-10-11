import { GymNotePage } from './app.po';

describe('gym-note App', function() {
  let page: GymNotePage;

  beforeEach(() => {
    page = new GymNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

/**
 * Styles the homepage title element. The menu title element must already be created in the HTML.
 */
export class HomepageTitleView {

  constructor() {
  }

  view(): void {
    this.styleHomepageTitleElement();
  }

  stopView(): void {
    // this function is intentionally blank
  }

  private styleHomepageTitleElement(): void {
    const homepageTitleElem = document.getElementById('homepage-title');
    if(homepageTitleElem === null) {
      console.error('Homepage title element is null');
      return;
    }
    homepageTitleElem.innerHTML = 'CHARLOTTE\'S HOMEPAGE';
  }
}
export class HomeButtonView {
  protected readonly element: HTMLElement = document.createElement('div');

  constructor() {
  }

  view(): void {
    this.addHomeButtonElement();

    // Subscribe to home button click
    this.element.addEventListener('click', () => this.onClickHomeButton());
  }

  stopView(): void {
    this.element.remove();
  }

  private addHomeButtonElement(): void {
    this.element.classList.add('home-btn');
    const navBar = document.getElementById('nav-bar');
    navBar!.appendChild(this.element);
  }

  /**
   * Navigates back to home page. Assumes that the home page is one level up from current page.
   */
  private onClickHomeButton() {
    const url = location.href;
    const mainMenuUrl = url.substring(0, url.lastIndexOf('/')); // Removes text past final slash (moves up one dir)
    location.assign(mainMenuUrl);
  }

}
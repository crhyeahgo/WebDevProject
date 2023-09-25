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
   * Navigates back to home page
   */
  private onClickHomeButton() {
    location.replace('/');
  }

}
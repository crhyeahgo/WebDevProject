export class HomeButtonView {
  protected readonly element: HTMLElement = document.createElement('div');
  protected readonly onHomeButtonClickCallback: (e: MouseEvent) => void;

  constructor() {
    this.onHomeButtonClickCallback = this.onHomeButtonClicked.bind(this);
  }

  view(): void {
    this.addHomeButtonElement();

    // Subscribe to home button click
    this.element.addEventListener('click', this.onHomeButtonClickCallback);
  }

  stopView(): void {
    this.element.removeEventListener('click', this.onHomeButtonClickCallback);
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
  private onHomeButtonClicked() {
    location.replace('/');
  }

}
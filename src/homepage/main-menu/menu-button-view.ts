export interface MenuButtonViewSpecifier {
  /**
   * Path to launch the specific application page.
   */
  pagePath: string;

  /**
   * Text to show under the specific menu button.
   */
  buttonCaption: string;

  /**
   * Parent HTML element
   */
  parentElement: HTMLElement;
}

export class MenuButtonView {
  protected readonly wrapperElement: HTMLElement = document.createElement('div');
  protected readonly buttonElement: HTMLElement = document.createElement('div');
  protected readonly buttonImageElement: HTMLElement = document.createElement('div');
  protected readonly buttonCaptionElement: HTMLElement = document.createElement('div');

  constructor(private specifier: MenuButtonViewSpecifier) {
  }

  view(): void {
    // Create menu button
    this.createMenuButtonElement();

    // Add menu button action
    const pagePath = this.specifier.pagePath;
    this.buttonElement.addEventListener('click', () => this.onMenuButtonClicked(pagePath));
  }

  stopView(): void {
  }

  createMenuButtonElement() {
    // Add classes to button's elements
    this.wrapperElement.classList.add('menu-btn-wrapper');
    this.buttonElement.classList.add('menu-btn');
    this.buttonImageElement.classList.add('menu-btn-image');
    this.buttonCaptionElement.classList.add('menu-btn-caption');

    // Add button caption text
    this.buttonCaptionElement.innerHTML = this.specifier.buttonCaption;

    // Add button and caption to wrapper element
    this.buttonElement.append(this.buttonImageElement);
    this.wrapperElement.append(this.buttonElement);
    this.wrapperElement.append(this.buttonCaptionElement);

    // Add button to menu
    this.specifier.parentElement!.appendChild(this.wrapperElement);
  }
  
  /**
   * Navigates to specific app page
   */
  private onMenuButtonClicked(pagePath: string) {
    location.replace(pagePath);
  }
}
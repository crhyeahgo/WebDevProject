export class MenuButtonView {
  protected readonly wrapperElement: HTMLElement = document.createElement('div');
  protected readonly butttonElement: HTMLElement = document.createElement('div');
  protected readonly buttonImageElement: HTMLElement = document.createElement('div');
  protected readonly buttonCaptionElement: HTMLElement = document.createElement('div');

  constructor(private pagePath: string, private btnCaption: string) {
  }

  view(): void {
    // Create menu button
    this.createMenuButtonElement();

    // Add menu button action
    this.butttonElement.addEventListener('click', () => this.onMenuButtonClicked(this.pagePath));
  }

  stopView(): void {
  }

  createMenuButtonElement() {
    // Add classes to button's elements
    this.wrapperElement.classList.add('menu-btn-wrapper');
    this.butttonElement.classList.add('menu-btn');
    this.buttonImageElement.classList.add('menu-btn-image');
    this.buttonCaptionElement.classList.add('menu-btn-caption');

    // Add button caption text
    this.buttonCaptionElement.innerHTML = this.btnCaption;

    // Add button and caption to wrapper element
    this.butttonElement.append(this.buttonImageElement);
    this.wrapperElement.append(this.butttonElement);
    this.wrapperElement.append(this.buttonCaptionElement);

    const mainMenu = document.getElementById('main-menu'); // TODO this should be configurable by caller
    mainMenu!.appendChild(this.wrapperElement);
  }
  
  /**
   * Navigates to specific app page
   */
  private onMenuButtonClicked(pagePath: string) {
    location.replace(pagePath);
  }

}
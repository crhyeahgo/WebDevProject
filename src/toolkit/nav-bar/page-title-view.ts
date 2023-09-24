export class PageTitleView {
  protected readonly element: HTMLElement = document.createElement('div');

  constructor() {
  }

  view(): void {
    this.addPageTitleElement();
  }

  stopView(): void {
    this.element.remove();
  }

  private addPageTitleElement(): void {
    this.element.classList.add('page-title');
    this.element.innerHTML = 'PERSONAL GROWTH';
    const navBar = document.getElementById('nav-bar');
    navBar!.appendChild(this.element);
  }
}
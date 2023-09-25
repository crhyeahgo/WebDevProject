export interface PageTitleViewSpecifier {
  parentElement: HTMLElement,
  title: string,
}

export class PageTitleView {
  protected readonly element: HTMLElement = document.createElement('div');

  constructor(private specifier: PageTitleViewSpecifier) {
  }

  view(): void {
    this.addPageTitleElement();
  }

  stopView(): void {
    this.element.remove();
  }

  private addPageTitleElement(): void {
    this.element.classList.add('page-title');
    this.element.innerHTML = this.specifier.title;
    this.specifier.parentElement!.appendChild(this.element);
  }
}
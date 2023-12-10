import { HomeButtonView } from './home-button-view'
import { PageTitleView, PageTitleViewSpecifier } from './page-title-view';

export class NavBarDecorator {
  protected readonly homeButtonView = new HomeButtonView();
  protected pageTitleView!: PageTitleView;

  constructor() {

  }

  init(): void {
    const pageTitleSpecifier: PageTitleViewSpecifier = {
      parentElement: document.getElementById('nav-bar') as HTMLElement,
      title: 'PERSONAL GROWTH',
    }
    this.pageTitleView = new PageTitleView(pageTitleSpecifier);
  }

  enable(): void {
    this.homeButtonView.view();
    this.pageTitleView.view();
  }

  disable(): void {
    this.homeButtonView.stopView();
    this.pageTitleView.stopView();
  }
}
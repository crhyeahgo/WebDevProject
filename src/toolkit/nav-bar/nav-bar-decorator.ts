import { HomeButtonView } from './home-button-view'
import { PageTitleView } from './page-title-view';

export class NavBarDecorator {
  protected readonly homeButtonView = new HomeButtonView();
  protected readonly pageTitleView = new PageTitleView();

  init(): void {

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
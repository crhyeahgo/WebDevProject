import { HomepageTitleView } from './homepage-title-view'

export class HomepageTitleDecorator {
  protected readonly homepageTitleView = new HomepageTitleView();

  init(): void {

  }

  enable(): void {
    this.homepageTitleView.view();
  }

  disable(): void {
    this.homepageTitleView.stopView();
  }
}
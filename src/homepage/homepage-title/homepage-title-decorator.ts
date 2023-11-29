import { Decorator } from '../../toolkit';
import { HomepageTitleView } from './homepage-title-view'

export class HomepageTitleDecorator extends Decorator {
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
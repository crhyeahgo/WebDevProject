import { Decorator } from '../../toolkit';
import { MainMenuView, MainMenuViewSpecifier } from './main-menu-view'

export class MainMenuDecorator extends Decorator {
  protected readonly mainMenuView: MainMenuView;

  constructor() {
    super();
    const viewSpecifier: MainMenuViewSpecifier = {
      appBasePath: location.href,
    }
    this.mainMenuView = new MainMenuView(viewSpecifier);
  }

  init(): void {

  }

  enable(): void {
    this.mainMenuView.view();
  }

  disable(): void {
    this.mainMenuView.stopView();
  }
}
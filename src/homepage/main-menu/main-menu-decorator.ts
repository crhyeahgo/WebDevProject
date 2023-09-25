import { MainMenuView } from './main-menu-view'

export class MainMenuDecorator {
  protected readonly mainMenuView = new MainMenuView();

  init(): void {

  }

  enable(): void {
    this.mainMenuView.view();
  }

  disable(): void {
    this.mainMenuView.stopView();
  }
}
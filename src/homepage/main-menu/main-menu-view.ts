import { MenuButtonView } from "./menu-button-view";

export class MainMenuView {
  private readonly buttonViews: MenuButtonView[] = [];
  
  constructor() {
  }

  view(): void {
    this.addMenuButtons();
  }

  stopView(): void {
  }

  addMenuButtons(): void {
    const personalGrowthBtn = new MenuButtonView('/personal-growth', 'Personal Growth');
    this.buttonViews.push(personalGrowthBtn);

    const pageTwoBtn = new MenuButtonView('/', 'Page 2');
    this.buttonViews.push(pageTwoBtn);

    const pageThreeBtn = new MenuButtonView('/', 'Page 3');
    this.buttonViews.push(pageThreeBtn);

    this.buttonViews.forEach((buttonView) => {
      buttonView.view();
    })
  }
}
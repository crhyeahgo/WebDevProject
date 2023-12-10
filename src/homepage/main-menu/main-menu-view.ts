import { MenuButtonView, MenuButtonViewSpecifier } from "./menu-button-view";

export interface MainMenuViewSpecifier {
  appBasePath: string;  // Base path for the app (localhost, https://crhyeahgo.github.io/WebDevProject/, etc)
}

export class MainMenuView {
  private readonly buttonViews: MenuButtonView[] = [];

  constructor(private specifier: MainMenuViewSpecifier) {
  }

  view(): void {
    this.addPersonalGrowthPageBtn();
    this.addPageTwoBtn();
    this.addPageThreeBtn();
  }

  stopView(): void {
  }

  addPersonalGrowthPageBtn(): void {
    const personalGrowthSpecifier: MenuButtonViewSpecifier = {
      parentElement: document.getElementById('main-menu') as HTMLElement,
      pagePath: `${this.specifier.appBasePath}personal-growth`,
      buttonCaption: 'Personal Growth',
    };
    const personalGrowthBtn = new MenuButtonView(personalGrowthSpecifier);
    this.buttonViews.push(personalGrowthBtn);
  }

  addPageTwoBtn(): void {
    const pageTwoSpecifier: MenuButtonViewSpecifier = {
      parentElement: document.getElementById('main-menu') as HTMLElement,
      pagePath: `${this.specifier.appBasePath}`,
      buttonCaption: 'Page 2',
    };
    const pageTwoBtn = new MenuButtonView(pageTwoSpecifier);
    this.buttonViews.push(pageTwoBtn);
  }

  addPageThreeBtn(): void {
    const pageThreeSpecifier: MenuButtonViewSpecifier = {
      parentElement: document.getElementById('main-menu') as HTMLElement,
      pagePath: `${this.specifier.appBasePath}`,
      buttonCaption: 'Page 3',
    };
    const pageThreeBtn = new MenuButtonView(pageThreeSpecifier);
    this.buttonViews.push(pageThreeBtn);

    this.buttonViews.forEach((buttonView) => {
      buttonView.view();
    })
  }
}
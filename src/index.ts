import { Application } from './toolkit';
import { HomepageTitleDecorator, MainMenuDecorator } from './homepage';
import './homepage/style.css';

window.onload = function() {
  const application = new Application();
  
  const homepageTitleDecorator = new HomepageTitleDecorator();
  application.decorate('homepageTitle', homepageTitleDecorator, true);
  const mainMenuDecorator = new MainMenuDecorator();
  application.decorate('mainMenu', mainMenuDecorator, true);
};
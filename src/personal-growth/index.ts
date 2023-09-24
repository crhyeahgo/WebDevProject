import { Application, NavBarDecorator } from '../toolkit'

import './style.css'

window.onload = function() {
  const application = new Application();
  
  const navBarDecorator = new NavBarDecorator();
  application.decorate('navBar', navBarDecorator, true);
};
import { Application, NavBarDecorator } from '../toolkit'
import { LifeConceptsDecorator } from './input-life-concepts/life-concepts-decorator';

import './style.css'

window.onload = function() {
  const application = new Application();
  
  const navBarDecorator = new NavBarDecorator();
  application.decorate('navBar', navBarDecorator, true);

  const lifeConceptsDecorator = new LifeConceptsDecorator();
  application.decorate('lifeConcepts', lifeConceptsDecorator, true);
};
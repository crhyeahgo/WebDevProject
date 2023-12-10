import { Decorator } from "../../toolkit";
import { LifeConceptsView, LifeConceptsViewSpecifier } from "./life-concepts-view";
import './life-concepts.css';

export class LifeConceptsDecorator extends Decorator {
  protected lifeConceptsView!: LifeConceptsView;

  init(): void {
    const viewSpecifier: LifeConceptsViewSpecifier = {
      parentElement: document.getElementById('table') as HTMLElement,
    }
    this.lifeConceptsView = new LifeConceptsView(viewSpecifier);
  }

  enable(): void {
    this.lifeConceptsView.view();
  }

  disable(): void {
    this.lifeConceptsView.stopView();
  }
}
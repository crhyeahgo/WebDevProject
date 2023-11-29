import { View } from "../../toolkit";

export interface LifeConceptsViewSpecifier {
  parentElement: HTMLElement
}

export class LifeConceptsView extends View {
  private readonly textInputElement = document.createElement('input');
  private readonly textSaveElement = document.createElement('button');

  constructor(private specifier: LifeConceptsViewSpecifier) {
    super();
  }

  init(): void {

  }

  view(): void {
    // Create text input element
    this.createInputElement();

    // Create text save button
    this.createSaveBtnElement();
  }

  stopView(): void {

  }

  createInputElement(): void {
    // Add styles to input
    this.textInputElement.classList.add('text-input');

    this.specifier.parentElement.appendChild(this.textInputElement);
  }

  createSaveBtnElement(): void {
    // Add styles to button
    this.textSaveElement.classList.add('save-btn');

    // Add button text
    this.textSaveElement.innerHTML = 'Save Text';

    this.specifier.parentElement.appendChild(this.textSaveElement);
  }
}
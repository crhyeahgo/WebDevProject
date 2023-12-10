import { textChangeRangeIsUnchanged } from "typescript";
import { View } from "../../toolkit";
import { LifeConceptsController } from "./life-concepts-controller";

export interface LifeConceptsViewSpecifier {
  parentElement: HTMLElement
}

export class LifeConceptsView extends View {
  private readonly textInputElement = document.createElement('input');
  private readonly saveBtn = document.createElement('button');
  private readonly loadBtn = document.createElement('button');
  private readonly controller = new LifeConceptsController();

  constructor(private specifier: LifeConceptsViewSpecifier) {
    super();
  }

  view(): void {
    // Create text input element
    this.createInputElement();

    // Create action buttons
    this.createActionButtons();

    // Handle button events
    this.saveBtn.addEventListener('click', () => this.onClickSaveBtn());
    this.loadBtn.addEventListener('click', () => this.onClickLoadBtn());
  }

  stopView(): void {

  }

  createInputElement(): void {
    // Add styles to input
    this.textInputElement.classList.add('text-input');

    this.specifier.parentElement.appendChild(this.textInputElement);
  }

  createActionButtons(): void {
    // Create save button
    this.saveBtn.classList.add('action-btn');
    this.saveBtn.innerHTML = 'Save Text';
    this.specifier.parentElement.appendChild(this.saveBtn);

    // Create load button
    this.loadBtn.classList.add('action-btn');
    this.loadBtn.innerHTML = 'Load Text';
    this.specifier.parentElement.appendChild(this.loadBtn);
  }

  private onClickSaveBtn() {
    console.log('Save button clicked for Life Concepts');

    const text = this.textInputElement.value;
    this.controller.saveTextToStorage(text)
  }

 private async onClickLoadBtn() {
    console.log('Load button clicked for Life Concepts');

    const text = await this.controller.loadTextFromStorage();
    this.textInputElement.value = text;

  }
}
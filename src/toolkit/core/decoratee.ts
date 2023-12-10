import { Decorator } from '.'

/**
 * Defines a component class that is capable of being decorated with decorators that provide capabilities onto the component.
 */
export abstract class Decoratee {
  /**
   * Map of all decorators attached to the component. Key: decorator name, Value: decorator object.
   */
  private decorators: Map<string, Decorator> = new Map<string, Decorator>();

  /**
   * Decorates the component with a specific capability.
   */
  public decorate(decoratorName: string, decorator: Decorator, enableOnDecoration: boolean): void {
    this.decorators.set(decoratorName, decorator);
    decorator.init();
    if (enableOnDecoration) {
      decorator.enable();
    }
  }

  /**
   * Undecorates the component to remove the specific capability from the component.
   * 
   * @returns whether the decorator was decorated on the component.
   */
  public undecorate(decoratorName: string): boolean {
    const decorator = this.decorators.get(decoratorName)
    decorator?.disable();
    return this.decorators.delete(decoratorName)
  }

  /**
   * Removes all decorators from the component.
   */
  public undecorateAll(): void {
    this.decorators.forEach((decorator) => {
      decorator.disable();
    })
  }
}
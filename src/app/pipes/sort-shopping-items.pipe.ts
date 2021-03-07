import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingItem } from '../shared/shopping-item';

@Pipe({
  name: 'sortShoppingItems',
  pure: false
})
export class SortShoppingItemsPipe implements PipeTransform {

  sortByChecked(a: ShoppingItem, b: ShoppingItem): number {
    if (!a.checked && b.checked) {
      return -1
    }
    if (!b.checked && a.checked) {
      return 1
    }
    return this.sortByName(a, b);
  }

  sortByName(a: ShoppingItem, b: ShoppingItem): number {
    if (a.name < b.name) {
      return -1;
    }
    if (b.name < a.name) {
      return 1;
    }
    return 0;
  }

  transform(value: ShoppingItem[], ...args: unknown[]): ShoppingItem[] {
    return [...value].sort((a, b) => this.sortByChecked(a, b));
  }

}

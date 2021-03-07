import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/app/shared/shopping-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {

  items: ShoppingItem[]

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        description: 'Some Description',
        name: 'item',
        checked: false
      },
      {
        description: 'Some Description',
        name: 'item 2',
        checked: false
      },
      {
        description: 'Some Description',
        name: 'item 1',
        checked: false
      },
    ]
  }

}

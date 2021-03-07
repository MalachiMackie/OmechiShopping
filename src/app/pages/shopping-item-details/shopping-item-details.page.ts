import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingItem } from 'src/app/shared/shopping-item';

@Component({
  selector: 'app-shopping-item-details',
  templateUrl: './shopping-item-details.page.html',
  styleUrls: ['./shopping-item-details.page.scss'],
})
export class ShoppingItemDetailsPage implements OnInit {

  @Input()
  item: ShoppingItem;

  constructor() { }

  ngOnInit() {
  }

}

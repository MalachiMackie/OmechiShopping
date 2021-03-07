import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShoppingItemDetailsPage } from 'src/app/pages/shopping-item-details/shopping-item-details.page';
import { ShoppingItem } from 'src/app/shared/shopping-item';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {

  @Input()
  item: ShoppingItem;
  
  @Input()
  disabled: boolean;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    
  }

  async editItem(): Promise<void> {
    const modal = await this.modalController.create({
      component: ShoppingItemDetailsPage,
      componentProps: {item: this.item}
    });
    await modal.present();
  }

  onClick() {
    this.item.checked = !this.item.checked;
  }

}

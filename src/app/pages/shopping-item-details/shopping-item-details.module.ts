import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingItemDetailsPageRoutingModule } from './shopping-item-details-routing.module';

import { ShoppingItemDetailsPage } from './shopping-item-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingItemDetailsPageRoutingModule
  ],
  declarations: [ShoppingItemDetailsPage]
})
export class ShoppingItemDetailsPageModule {}

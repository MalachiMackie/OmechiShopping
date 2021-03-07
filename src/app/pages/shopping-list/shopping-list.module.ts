import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';

import { ShoppingListPage } from './shopping-list.page';
import { ShoppingItemComponent } from 'src/app/components/shopping-item/shopping-item.component';
import { SortShoppingItemsPipe } from 'src/app/pipes/sort-shopping-items.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule
  ],
  declarations: [ShoppingListPage, ShoppingItemComponent, SortShoppingItemsPipe]
})
export class ShoppingListPageModule {}

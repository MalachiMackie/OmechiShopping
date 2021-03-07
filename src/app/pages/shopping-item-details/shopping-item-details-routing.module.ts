import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingItemDetailsPage } from './shopping-item-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingItemDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingItemDetailsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductListComponent } from './page/lists/product-list/product-list.component';
import { CustomerListComponent } from './page/lists/customer-list/customer-list.component';
import { OrderListComponent } from './page/lists/order-list/order-list.component';
import { BillListComponent } from './page/lists/bill-list/bill-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'customers',
    component: CustomerListComponent,
  },
  {
    path: 'orders',
    component: OrderListComponent,
  },
  {
    path: 'bills',
    component: BillListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { ProductListComponent } from './page/lists/product-list/product-list.component';
import { CustomerListComponent } from './page/lists/customer-list/customer-list.component';
import { OrderListComponent } from './page/lists/order-list/order-list.component';
import { BillListComponent } from './page/lists/bill-list/bill-list.component';
import { EditProductComponent } from './page/editors/edit-product/edit-product.component';
import { EditCustomerComponent } from './page/editors/edit-customer/edit-customer.component';
import { EditOrderComponent } from './page/editors/edit-order/edit-order.component';
import { EditBillComponent } from './page/editors/edit-bill/edit-bill.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    CustomerListComponent,
    OrderListComponent,
    BillListComponent,
    EditProductComponent,
    EditCustomerComponent,
    EditOrderComponent,
    EditBillComponent,
    FilterPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { BillService } from 'src/app/service/bill.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeCustomers: Customer[] = [];

  activeProducts: Product[] = [];

  pendingOrders: Order[] = [];

  billList: Bill[] = [];

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private orderService: OrderService,
    private billService: BillService
  ) {}

  ngOnInit(): void {
    this.customerService
      .getAll()
      .subscribe(
        (customers) =>
          (this.activeCustomers = customers.filter(
            (customer) => customer.active == true
          ))
      );

    this.productService
      .getAll()
      .subscribe(
        (products) =>
          (this.activeProducts = products.filter(
            (product) => product.active == true
          ))
      );

    this.orderService
      .getAll()
      .subscribe(
        (orders) =>
          (this.pendingOrders = orders.filter(
            (order) => order.status != 'paid'
          ))
      );

    this.billService
      .getAll()
      .subscribe(
        (bills) =>
          (this.billList = bills.filter((bill) => bill.status == 'new'))
      );
  }

  getUnpaidAmount(): number {
    let amount = 0;
    this.billList.forEach(bill => amount += bill.amount);
    return amount;
  }
}

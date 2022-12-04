import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Product } from 'src/app/model/product';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeCustomers: Customer[] = [];

  activeProducts: Product[] = [];

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.customerService
      .getAll()
      .subscribe(
        (customers) =>
          (this.activeCustomers = customers.filter(
            (customer) => (customer.active = true)
          ))
      );

    this.productService
      .getAll()
      .subscribe(
        (products) =>
          (this.activeProducts = products.filter(
            (product) =>(product.active = true)
          ))
      );
  }
}

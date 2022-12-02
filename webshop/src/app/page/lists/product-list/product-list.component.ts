import { productHeaders } from './../../../model/product';
import { Component, OnInit, Input, inject } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() productHeaders = productHeaders;

  constructor(public productService: ProductService) {}

  product: Product = new Product();

  headers = this.productHeaders;

  ngOnInit(): void {}
}


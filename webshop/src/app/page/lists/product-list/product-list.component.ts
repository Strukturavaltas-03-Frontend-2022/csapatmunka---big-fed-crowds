import { productHeaders } from 'src/app/model/product';
import { Component, OnInit, Input, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() productHeaders: string[] = [];

  product$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  headers = this.productHeaders;

  // product$ = combineLatest({
  //   cat: this.categoryService.getAll(),
  //   prod: this.productService.getAll(),
  // }).pipe(
  //   map((result) =>
  //     result.prod.map((product) => {
  //       product.catId = result.cat.find((c) => (c.id = product.id));
  //       return product;
  //     })
  //   )
  // );

  ngOnInit(): void {}
}


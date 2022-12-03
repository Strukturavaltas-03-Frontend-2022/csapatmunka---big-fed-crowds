
import { Component, OnInit, Input, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Product[]> = this.productService.getAll();

  columns = this.configService.productTableColumns;

  constructor(
    private productService: ProductService,
    private configService: ConfigService,
    private categoryService: CategoryService
  ) {}

//productList$ = combineLatest({
//  cat: this.categoryService.getAll(),
//  prod: this.productService.getAll(),
//}).pipe(
//  map(result =>
//    result.prod.map(product => {
//      product.catId = result.cat.find(c => c.id === product.id);
//      return product;
//    })
//  )
//);

  ngOnInit(): void {}
}


import { environment } from './../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = environment.apiUrl;
  entity: string = 'product';

  constructor(public http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${this.entity}`);
  }

  ngOnInit(): void {}
}

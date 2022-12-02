import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }



}

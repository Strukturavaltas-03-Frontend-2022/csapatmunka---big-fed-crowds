import { Category } from './category';

export class Product {
  [x: string]: any;
  id: number = 0;
  name: string = '';
  type: string = '';
  catId?: Category = new Category();
  description: string = '';
  price: number = 0;
  featured: boolean = false;
  active: boolean = false;
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ConfigService } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  orderList$: Observable<Order[]> = this.orderService.getAll();

  columns = this.configService.orderTableColumns;

  constructor(
    private orderService: OrderService,
    private configService: ConfigService
  ) {

  }

}

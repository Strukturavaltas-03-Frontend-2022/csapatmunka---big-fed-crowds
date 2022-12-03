import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  customerList$: Observable<Customer[]> = this.customerService.getAll();

  columns = this.configService.customerTableColumns;

  constructor(
    private customerService: CustomerService,
    private configService: ConfigService
  ) {}

}

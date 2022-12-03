import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})

export class BillListComponent {

  billList$: Observable<Bill[]> = this.billService.getAll();

  columns = this.configService.billTableColumns;

  constructor(
    private billService: BillService,
    private configService: ConfigService
  ) {}

}

import { Component, Input, OnInit } from '@angular/core';

export interface ITableCol {
  [x: string]: any;
  title: string;
  key: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T extends { [x: string]: any }> implements OnInit {

  @Input() listers: T[] = [];
  @Input() columns: ITableCol[] = [];


  ngOnInit(): void {
  }
}

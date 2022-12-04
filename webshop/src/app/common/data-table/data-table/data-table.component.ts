import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITableCol {
  [x: string]: any;
  title: string;
  key: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent<T extends { [x: string]: any }>
  implements OnInit
{
  @Input() listers: T[] = [];
  @Input() columns: ITableCol[] = [];

  sortKey: string = '';
  sortDirection: number = 1;

  filterPhrase: string = '';

  page: number = 1;

  @Output() onEdit: EventEmitter<T> = new EventEmitter();
  @Output() onDelete: EventEmitter<T> = new EventEmitter();

  ngOnInit(): void {}

  raiseEdit(row: T): void {
    this.onEdit.emit(row);
  }

  raiseDelete(row: T): void {
    this.onDelete.emit(row);
  }

  startSort(key: string): void {
    if (key === this.sortKey) {
      this.sortDirection *= -1;
    } else {
      this.sortDirection = 1;
    }

    this.sortKey = key;
  }
}

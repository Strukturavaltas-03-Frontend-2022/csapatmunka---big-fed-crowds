import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  customerTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Firstname', key: 'firstName' },
    { title: 'Lastname', key: 'lastName' },
    { title: 'Email', key: 'email' },
    { title: 'Address', key: 'address' },
    { title: 'Active', key: 'active' },
  ];


  constructor() { }
}

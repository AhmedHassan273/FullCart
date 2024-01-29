import { Component } from '@angular/core';
import { Brand } from '../../../models/brand.model';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css'],
})
export class BrandsListComponent {
  brandsList: Brand[] = [
    {
      id: 1,
      name: 'brand 1',
    },
    {
      id: 1,
      name: 'brand 2',
    },
    {
      id: 1,
      name: 'brand 3',
    },
    {
      id: 1,
      name: 'brand 4',
    },
  ];

  constructor() {}
}

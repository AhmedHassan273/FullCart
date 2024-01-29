import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categorys-list',
  templateUrl: './categorys-list.component.html',
  styleUrls: ['./categorys-list.component.css'],
})
export class CategorysListComponent {
  categorysList: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
    {
      id: 1,
      name: 'Category 2',
    },
    {
      id: 1,
      name: 'Category 3',
    },
    {
      id: 1,
      name: 'Category 4',
    },
  ];

  constructor() {}
}

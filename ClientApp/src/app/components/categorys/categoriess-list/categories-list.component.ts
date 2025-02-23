import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class categoriesListComponent {
  categoriesList: Category[] = [
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

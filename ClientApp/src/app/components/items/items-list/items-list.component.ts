import { Component } from '@angular/core';
import { Item } from '../../../models/item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {

  itemsList: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      description: 'This is item 1',
      price: 10,
      brand: {
        name: 'Brand 1',
      },
      category: { name: 'Category 1' },
      quantity: 5,
      image: 'image1.jpg',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'This is item 2',
      price: 20,
      brand: {
        name: 'Brand 2',
      },
      category: { name: 'Category 2' },
      quantity: 10,
      image: 'image2.jpg',
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'This is item 3',
      price: 30,
      brand: {
        name: 'Brand 3',
      },
      category: { name: 'Category 3' },
      quantity: 15,
      image: 'image3.jpg',
    },
  ];

  constructor(private route: ActivatedRoute) {}
}

import { Component } from '@angular/core';
import { Item } from '../../../models/item.model';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  itemsList: Item[] = [];

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.itemsList = data['items'];
      console.log(this.itemsList);
      
    });
  }

  deleteItem(id?: number): void {
    this.itemService.deleteItem(id).subscribe(result => {
      if(result) {
        alert('removed item successfully!');
        this.itemsList = this.itemsList.filter(i => i != id);
      } else {
        alert('someting went wrong!');
      }
    })
  }
}

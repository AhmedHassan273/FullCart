import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  baseUrl: string = environment.apiUrl + 'Item';

  constructor(private httpClient: HttpClient) {}

  getAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this.baseUrl}`);
  }

  getItemById(itemId: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseUrl}/${itemId}`);
  }

  updateItem(updatedItem: Item, itemId?: number): Observable<Item> {
    return this.httpClient.put<Item>(`${this.baseUrl}/${itemId}`, updatedItem);
  }

  deleteItem(itemId?: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.baseUrl}/${itemId}`);
  }

  addNewItem(newItem: Item): Observable<Item> {
    return this.httpClient.post<Item>(`${this.baseUrl}`, newItem);
  }
}

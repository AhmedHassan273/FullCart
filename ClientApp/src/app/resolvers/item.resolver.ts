import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Injectable({
  providedIn: 'root',
})
export class ItemResolver implements Resolve<Item | null> {
  constructor(private itemService: ItemService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item | null> {
    let id = JSON.parse(route.params.itemId) as number;
    return this.itemService.getItemById(id).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
}

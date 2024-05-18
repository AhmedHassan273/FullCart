import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsListResolver implements Resolve<Item[] | null> {
  constructor(private itemService: ItemService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item[] | null> {
    return this.itemService.getAllItems().pipe(
      catchError((error) => {
        console.log('Found Error Fetching Items', error);

        return of(null);
      })
    );
  }
}

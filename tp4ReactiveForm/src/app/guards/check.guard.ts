import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StockService } from '../services/stock.service';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.stock.checkUser();
  }

  constructor(private stock:StockService) {

  }
}

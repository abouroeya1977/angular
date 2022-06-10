import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolverResolver implements Resolve<Product[]>{
  constructor(private productService: ProductService) {
  }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Product[]> {
    console.log("ProductListResover is called");
    return this.productService.getProducts();
  }
}
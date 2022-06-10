import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpCreateComponent } from '../emp/emp-create/emp-create.component';

@Injectable({
  providedIn: 'root'
})
export class CheckSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!(component as EmpCreateComponent).isSaved)
      return window.confirm('Attention, vous risquez de perdre les modifications!. Voulez vous continuer ?');
    else
      return true;
  }

}

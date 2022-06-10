import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmpCreateComponent } from './emp/emp-create/emp-create.component';
import { EmpListComponent } from './emp/emp-list/emp-list.component';
import { AdminGuard } from './guards/admin.guard';
import { ChechAuthGuard } from './guards/chech-auth.guard';
import { CheckAdminGuard } from './guards/check-admin.guard';
import { CheckSaveGuard } from './guards/check-save.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { ProductListResolverService } from './services/product-list-resolver.service';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'navbar', component: NavbarComponent },
  {
    path: 'employees',
    component: EmpListComponent,
    outlet: 'contenu',
    canActivate: [ChechAuthGuard],
  },
  { path: 'create', component: EmpCreateComponent, outlet: 'contenu', canActivate: [CheckAdminGuard], canDeactivate: [CheckSaveGuard] },
  { path: 'welcome', component: WelcomeComponent, outlet: 'contenu' },
  { path: 'logout', component: AuthComponent },
  {
    path: 'product1', component: Product1Component, outlet: 'contenu', canActivate: [ChechAuthGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: 'edit/:id', component: ProductEditComponent }
    ]
  },


  {
    path: 'product2',
    component: Product2Component,
    resolve: { products: ProductListResolverService }, outlet: 'contenu'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

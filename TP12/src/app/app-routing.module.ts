import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmpCreateComponent } from './emp/emp-create/emp-create.component';
import { EmpListComponent } from './emp/emp-list/emp-list.component';
import { CheckAdminGuard } from './guards/check-admin.guard';
import { CheckAuthGuard } from './guards/check-auth.guard';
import { CheckSaveGuard } from './guards/check-save.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { ProductListResolverResolver } from './services/product-list-resolver.resolver';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'navbar', component: NavbarComponent },
  {
    path: 'employees',
    component: EmpListComponent,
    outlet: 'contenu',
    canActivate: [CheckAuthGuard]
  },
  {
    path: 'create',
    component: EmpCreateComponent,
    outlet: 'contenu',
    canActivate: [CheckAuthGuard, CheckAdminGuard],
    canDeactivate: [CheckSaveGuard]
  },
  { path: 'welcome', component: WelcomeComponent, outlet: 'contenu' },
  { path: 'logout', component: AuthComponent },
  { path: 'product1', component: Product1Component, outlet: 'contenu' },
  {
    path: 'product2',
    component: Product2Component,
    resolve: { products: ProductListResolverResolver }, outlet: 'contenu'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

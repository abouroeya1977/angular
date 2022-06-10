import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmpListComponent } from './emp/emp-list/emp-list.component';
import { EmpDetailComponent } from './emp/emp-detail/emp-detail.component';
import { EmpCreateComponent } from './emp/emp-create/emp-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';

const materialComponents=[
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatSnackBarModule
]


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    WelcomeComponent,
    EmpListComponent,
    EmpDetailComponent,
    EmpCreateComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    materialComponents
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

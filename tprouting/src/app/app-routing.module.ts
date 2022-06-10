import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ContentComponent } from './template/content/content.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './template/home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login', component: LoginComponent,outlet:"route2" },
  { path: 'home', component: HomeComponent,outlet:"route2"},
  { path: 'content', component: ContentComponent,outlet:"route2"},
  { path: 'thefooter', component: FooterComponent,outlet:"route3"},
  { path: 'navbar', component: NavbarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

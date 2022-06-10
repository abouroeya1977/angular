import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  isAdmin = false;
  isClient = false;
  username?: string;

  constructor(public translate: TranslateService, private tokenStorageService: TokenStorageService, private route: ActivatedRoute, private router: Router) {
    translate.addLangs(['en', 'fr','ar']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {

    console.log("tokrn", this.tokenStorageService.getTokenValue());
    if (this.tokenStorageService.getTokenValue() != null)
      this.isLoggedIn = true;

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUsername();
      this.isAdmin = <boolean>this.tokenStorageService.hasRole('ADMIN');
      this.isClient = <boolean>this.tokenStorageService.hasRole('CLIENT');
      this.username = <string>this.tokenStorageService.getUsername();
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate([{ outlets: { primary: 'login', contenu: null } }]);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
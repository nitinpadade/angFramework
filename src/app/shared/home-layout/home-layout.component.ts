import { Component, OnInit } from '@angular/core';
import { UserauthenticateService } from '../../services/userauthenticate.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GetHeadersService } from '../../services/get-headers.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  loggedInUser: string;
  nav: boolean;
  roleId: number;

  constructor(private userauthService: UserauthenticateService, 
    private router: Router, 
    private cookieService: CookieService,
    private headerService: GetHeadersService) { }

  ngOnInit() {
    this.nav = false;
    this.roleId = this.headerService.getRole();
    this.userauthService.isUserLogin()
      .subscribe(nav => this.nav = nav);
    if (!this.nav) {
      var returnUrl = '/login';
      this.router.navigate([returnUrl]);
    }
    this.loggedInUser = this.cookieService.get('loggedInUser');

  }

  navbarOpen = false;
  dropDownOpen = false;
  dropEmployeer = false;
  dropJobSeekers = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggledropdown() {
    this.dropDownOpen = !this.dropDownOpen;
    this.dropEmployeer = false;
    this.dropJobSeekers = false;
  }

  toggleEmployeer() {
    this.dropEmployeer = !this.dropEmployeer;
    this.dropJobSeekers = false;
    this.dropDownOpen = false;
  }

  toggleJobSeekers() {
    this.dropJobSeekers = !this.dropJobSeekers;
    this.dropEmployeer = false;
    this.dropDownOpen = false;
  }

}

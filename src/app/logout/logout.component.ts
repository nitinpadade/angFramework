import { Component, OnInit } from '@angular/core';
import { UserauthenticateService } from '../services/userauthenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userauthService: UserauthenticateService, private router: Router) { }

  ngOnInit() {
    this.logOut();
    var returnUrl = '/login/';
    this.router.navigate([returnUrl]);
  }

  logOut() {
    this.userauthService.userLogout().subscribe(
      data => {
        console.log(data);
      }
    )
  }

}

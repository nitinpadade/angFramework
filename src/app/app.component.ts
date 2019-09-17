import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticateService } from './services/userauthenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  nav: boolean;
  constructor(private userauthService: UserauthenticateService, private router: Router) { }

  ngOnInit() {   
    this.nav=false;
    this.userauthService.isUserLogin()
      .subscribe(nav => this.nav = nav);   
      if(!this.nav)
      {
        var returnUrl = '/login'; 
        this.router.navigate([returnUrl]); 
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from '../userloginmodel';
import { UserauthenticateService } from '../services/userauthenticate.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: UserLoginModel=new UserLoginModel(); 
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  submitted = false;
  cookieValue:string;

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
     private userauthService: UserauthenticateService, 
     private cookieService: CookieService) { }

     ngOnInit() {
      this.loginForm = this.formBuilder.group({
        UserName: ['', Validators.required],
        Password: ['', Validators.required]
      });
      this.returnUrl = '/dashboard';
      //this.authService.logout();
    }
    
  
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    
    login() {
  
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      else{
        
       
        this.model.UserName = this.f.UserName.value;
        this.model.Password = this.f.Password.value;
        console.log(this.model);
       this.userauthService.userAuthenticate(this.model)
        .subscribe(
                    data => { 
                      console.log(data);
                      if(data.isAuthenticated==true)
                      {                        
                        this.cookieService.set('isLoggedIn', "true", 30);
                        this.cookieService.set('loggedInUser', data.name, 30);
                        this.cookieService.set('loggedInId', data.id, 30);
                        this.cookieService.set('loggedInRoleId', data.roleId, 30);
                        this.cookieService.set('token', data.token, 30);
                        this.cookieValue=this.cookieService.get('token');
                        console.log("Token: " + this.cookieValue);
                        this.router.navigate([this.returnUrl]);    
                      }
                      else
                        alert("Invalid Username Or Password");
                    }, 
                    error => { 
                      
                      console.log("Error", error); }
                  );         
      }    
    }

} 

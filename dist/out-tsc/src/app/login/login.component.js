import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { UserLoginModel } from '../userloginmodel';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, userauthService, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userauthService = userauthService;
        this.cookieService = cookieService;
        this.model = new UserLoginModel();
        this.submitted = false;
    }
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
        else {
            this.model.UserName = this.f.UserName.value;
            this.model.Password = this.f.Password.value;
            console.log(this.model);
            this.userauthService.userAuthenticate(this.model)
                .subscribe(data => {
                console.log(data);
                if (data.isAuthenticated == true) {
                    this.cookieService.set('isLoggedIn', "true", 30);
                    this.cookieService.set('loggedInUser', data.name, 30);
                    this.cookieService.set('loggedInId', data.id, 30);
                    this.cookieService.set('loggedInRoleId', data.roleId, 30);
                    this.cookieService.set('token', data.token, 30);
                    this.cookieValue = this.cookieService.get('token');
                    console.log("Token: " + this.cookieValue);
                    this.router.navigate([this.returnUrl]);
                }
                else
                    alert("Invalid Username Or Password");
            }, error => {
                console.log("Error", error);
            });
        }
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
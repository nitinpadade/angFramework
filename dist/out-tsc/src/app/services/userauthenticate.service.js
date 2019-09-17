import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RefreshTokenModel } from '../models/RefreshTokenModel';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable, of } from 'rxjs';
let UserauthenticateService = class UserauthenticateService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.refreshModel = new RefreshTokenModel();
    }
    createAuthorizationHeader(headers) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    userAuthenticate(userLogin) {
        const userAuthServiceUrl = 'http://localhost:3122/api/UserLogin/authenticate';
        return this.http.post(userAuthServiceUrl, userLogin);
    }
    tokenRefresh() {
        this.refreshModel.Id = Number(this.cookieService.get('loggedInId'));
        const userAuthServiceUrl = 'http://localhost:3122/api/UserLogin/refresh';
        return this.http.post(userAuthServiceUrl, this.refreshModel);
    }
    refreshToken() {
        this.tokenRefresh()
            .subscribe(data => {
            console.log(data);
            if (data.isAuthenticated == true) {
                this.cookieService.set('token', data.token, 30);
                location.reload();
            }
        }, error => {
            console.log("Error", error);
        });
        return true;
    }
    userLogout() {
        const userLogoutUrl = 'http://localhost:3122/api/UserLogin/logout';
        this.cookieService.deleteAll();
        return this.http.get(userLogoutUrl)
            .catch(this.errorHandler);
    }
    errorHandler(error) {
        console.log(error);
        return Observable.throw(error);
    }
    isUserLogin() {
        var isLoggedIn = this.cookieService.get('isLoggedIn');
        if (this.cookieService.get('isLoggedIn') !== "")
            return of(true);
        else
            return of(false);
    }
};
UserauthenticateService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserauthenticateService);
export { UserauthenticateService };
//# sourceMappingURL=userauthenticate.service.js.map
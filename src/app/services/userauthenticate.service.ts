import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { UserLoginModel } from '../userloginmodel';
import { RefreshTokenModel } from '../models/RefreshTokenModel';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticateService {

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  refreshModel: RefreshTokenModel = new RefreshTokenModel(); 

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  userAuthenticate(userLogin: UserLoginModel): any {
    const userAuthServiceUrl = 'http://localhost:3122/api/UserLogin/authenticate';
    return this.http.post<UserLoginModel>(userAuthServiceUrl, userLogin);
  }

  tokenRefresh(): any {
    this.refreshModel.Id = Number(this.cookieService.get('loggedInId'));
    const userAuthServiceUrl = 'http://localhost:3122/api/UserLogin/refresh';
    return this.http.post<RefreshTokenModel>(userAuthServiceUrl, this.refreshModel);
  }

  refreshToken(): any {
    this.tokenRefresh()
    .subscribe(
      data => {
        console.log(data);
        if (data.isAuthenticated == true) {
          this.cookieService.set('token', data.token, 30);
          location.reload();
        }
      },
      error => {
        console.log("Error", error);
      }
    );    
    return true;
  }

  userLogout() {
    const userLogoutUrl = 'http://localhost:3122/api/UserLogin/logout';
    this.cookieService.deleteAll();
    return this.http.get(userLogoutUrl)
      .catch(this.errorHandler)
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

  isUserLogin(): Observable<boolean> {
    var isLoggedIn = this.cookieService.get('isLoggedIn');
    if (this.cookieService.get('isLoggedIn') !== "")
      return of(true);
    else
      return of(false);
  }

  UserId(): Observable<number> {
    var userId = Number(this.cookieService.get('loggedInId'));
    if (userId !=null && userId >= 0)
      return of(userId);
    else
      return of(userId);
  }

  UserName(): Observable<string> {
    var user = this.cookieService.get('loggedInUser');
    if (user !=null)
      return of(user);
    else
      return of(user);
  }
}   

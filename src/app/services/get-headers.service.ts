import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GetHeadersService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  roleId: number;

  getRole(){
    this.roleId = Number(this.cookieService.get('loggedInRoleId'));
    return this.roleId;
  }

  headerOptions(): any 
  {
    var authHeader = 'Bearer ' + this.cookieService.get('token');
    let httpHeaders = new HttpHeaders({      
      'Access-Control-Allow-Origin': '*',
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': authHeader
    }); 
    let options = {
      headers: httpHeaders
    }; 
    return options;
  };

  headerOptionsForPagination(page: string): any 
  {
    var authHeader = 'Bearer ' + this.cookieService.get('token');
    let httpHeaders = new HttpHeaders({      
      'Access-Control-Allow-Origin': '*',
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': authHeader
    }); 
    let options = {
      headers: httpHeaders,
      params: new HttpParams().set('page', page)
    }; 
    return options;
  };
}

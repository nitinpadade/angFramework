import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';  
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
import { UserListModel } from '../models/UserListModel';
import { GetHeadersService } from './get-headers.service';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

 constructor(private http: HttpClient, 
  private headersService: GetHeadersService) { } 


 userList(sortOrder: string, searchKey: string, page: string): any {  
    //const params = new HttpParams().set('page', page);
    const userListServiceUrl = 'http://localhost:3122/api/Users'; 
    return this.http.get<UserListModel>(userListServiceUrl,
      this.headersService.headerOptionsForPagination(page));
  }

  userGet(id: Number): any {  
    const userListServiceUrl = 'http://localhost:3122/api/Users/' + id.toString(); 
    return this.http.get<any>(userListServiceUrl, this.headersService.headerOptions());
  }
}
 
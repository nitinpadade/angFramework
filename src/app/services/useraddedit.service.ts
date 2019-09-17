import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { UserAddEditModel } from '../models/UserAddEditModel';
import { GetHeadersService } from './get-headers.service';

@Injectable({
  providedIn: 'root'
})
export class UseraddeditService {

  constructor(private http: HttpClient, private headersService: GetHeadersService) { }

  userAddEdit(userAddEdit: UserAddEditModel): any {
    const userAddEditServiceUrl = 'http://localhost:3122/api/Users/save';
    return this.http.post<UserAddEditModel>(userAddEditServiceUrl, userAddEdit, 
      this.headersService.headerOptions()
     );
  }

}

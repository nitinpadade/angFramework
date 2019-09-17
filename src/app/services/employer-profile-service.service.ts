import { Injectable } from '@angular/core';
import { EmployeerProfileModel } from '../models/EmployeerProfileModel';
import { HttpClient } from '@angular/common/http';
import { GetHeadersService } from './get-headers.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerProfileServiceService {

  constructor(private http: HttpClient, 
    private headersService: GetHeadersService) { }

  employeerProfile(): any {  
    const userListServiceUrl = 'http://localhost:3122/api/EmployerProfile/'; 
    return this.http.get<EmployeerProfileModel>(userListServiceUrl, this.headersService.headerOptions());
  }

  employeerProfileAdd(employeerProfile: EmployeerProfileModel): any {
    const userAddEditServiceUrl = 'http://localhost:3122/api/EmployerProfile/save';
    return this.http.post<EmployeerProfileModel>(userAddEditServiceUrl, employeerProfile, 
      this.headersService.headerOptions()
     );
  }
}

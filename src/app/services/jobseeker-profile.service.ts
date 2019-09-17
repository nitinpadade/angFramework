import { Injectable } from '@angular/core';
import { JobSeekerProfileModel } from '../models/JobSeekerProfileModel';
import { HttpClient } from '@angular/common/http';
import { GetHeadersService } from './get-headers.service';

@Injectable({
  providedIn: 'root'
})
export class JobseekerProfileService {

  constructor(private http: HttpClient, 
    private headersService: GetHeadersService) { }

  jskProfile(): any {  
    const userListServiceUrl = 'http://localhost:3122/api/JobSeekerProfile/'; 
    return this.http.get<JobSeekerProfileModel>(userListServiceUrl, this.headersService.headerOptions());
  }
}

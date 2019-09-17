import { Injectable } from '@angular/core';
import { Role } from '../models/Role';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  public Roles: Role[] = [
    {
        id: 1,
        name: 'Administrator'
    },
    {
        id : 2,
        name: 'Employer'
    },
    {
      id : 3,
      name: 'Job Seeker'
    }
  ];
  
}

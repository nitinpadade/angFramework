import { Component, OnInit } from '@angular/core';
import { EmployerProfileServiceService } from '../services/employer-profile-service.service';
import { EmployeerProfileModel } from '../models/EmployeerProfileModel';
import { UserauthenticateService } from '../services/userauthenticate.service';

@Component({
  selector: 'app-employeer-profile',
  templateUrl: './employeer-profile.component.html',
  styleUrls: ['./employeer-profile.component.css']
})
export class EmployeerProfileComponent implements OnInit {


  employeerProfile: EmployeerProfileModel = new EmployeerProfileModel();

  constructor(private userauthService: UserauthenticateService, 
    private empProfileService: EmployerProfileServiceService) { }

  ngOnInit() {
    this.getemployeerProfile();
   };
 
   getemployeerProfile() {
     this.empProfileService.employeerProfile()
       .subscribe(
         dt => {
           this.employeerProfile = dt.data; 
         },
         error => {
           if (error.status == '401') {
             console.log("Error", error);
             this.userauthService.refreshToken(); 
           }
         }
       );
   };

}

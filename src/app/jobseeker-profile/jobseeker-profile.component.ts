import { Component, OnInit } from '@angular/core';
import { JobSeekerProfileModel } from '../models/JobSeekerProfileModel';
import { JobseekerProfileService } from '../services/jobseeker-profile.service';
import { UserauthenticateService } from '../services/userauthenticate.service';

@Component({
  selector: 'app-jobseeker-profile',
  templateUrl: './jobseeker-profile.component.html',
  styleUrls: ['./jobseeker-profile.component.css']
})
export class JobseekerProfileComponent implements OnInit {

  jskPrf: JobSeekerProfileModel = new JobSeekerProfileModel();
  logedUser: string;

  constructor(private userauthService: UserauthenticateService, 
    private jobSeekProfileService: JobseekerProfileService) { }
 
  ngOnInit() {
    this.getjobSeekerProfile();
    this.userauthService.UserName().subscribe(lgu => this.logedUser = lgu); 
  } 

  getjobSeekerProfile() {
    this.jobSeekProfileService.jskProfile()
      .subscribe(
        dt => {
          this.jskPrf = dt.data; 
          console.log(this.jskPrf);
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

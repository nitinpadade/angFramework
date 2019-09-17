import { Component, OnInit } from '@angular/core';
import { UserauthenticateService } from '../services/userauthenticate.service';
import { EmployerProfileServiceService } from '../services/employer-profile-service.service';
import { EmployeerProfileModel } from '../models/EmployeerProfileModel';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employer-profile',
  templateUrl: './add-employer-profile.component.html',
  styleUrls: ['./add-employer-profile.component.css']
})
export class AddEmployerProfileComponent implements OnInit {

  employeerProfile: EmployeerProfileModel = new EmployeerProfileModel();
  empProfileForm: FormGroup;
  submitted = false;

  constructor(private userauthService: UserauthenticateService, 
    private empProfileService: EmployerProfileServiceService, 
    private formBuilder: FormBuilder, 
    private location: Location, 
    private router: Router) { }

    ngOnInit() {
      this.getemployeerProfile();
      this.empProfileForm = this.formBuilder.group({
        frmName: ['', Validators.required],
        frmAbout: ['', Validators.required],
        frmAddress: ['', Validators.required]
        }); 
     };

     onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.empProfileForm.invalid) {
          return;
      }
      this.save();
  }
   
     get f() { return this.empProfileForm.controls; }

     getemployeerProfile() {
       this.empProfileService.employeerProfile()
         .subscribe(
           dt => {
             this.employeerProfile = dt.data; 
             console.log(this.employeerProfile);
           },
           error => {
             if (error.status == '401') {
               console.log("Error", error);
               this.userauthService.refreshToken(); 
             }
           }
         );
     };

     save(): void
     {          
       this.empProfileService.employeerProfileAdd(this.employeerProfile)
       .subscribe(
                   data => { 
                     var editUrl = '/employeer-profile/'; 
                     this.router.navigate([editUrl]);    
                   }, 
                   error => { console.log("Rrror", error); }
                 );
     }

     goBack(): void {
      this.location.back();
    }

}

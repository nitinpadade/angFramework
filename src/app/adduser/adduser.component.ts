import { Component, OnInit, AfterContentChecked, ChangeDetectorRef  } from '@angular/core';
import { UserAddEditModel } from '../models/UserAddEditModel';
import { Observable, of, observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UseraddeditService } from '../services/useraddedit.service';
import { UserlistService } from '../services/userlist.service';
import { UserauthenticateService } from '../services/userauthenticate.service';
import { LookupService } from '../services/lookup.service';
import { GetHeadersService } from '../services/get-headers.service';
import { Role } from '../models/Role';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit, AfterContentChecked  {

 user: UserAddEditModel = new UserAddEditModel();
 id: number;
 registerForm: FormGroup;
 submitted = false;
 roles: Role[];


  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router, 
    private useraddeditService: UseraddeditService, 
    private userlistService: UserlistService, 
    private userauthService: UserauthenticateService, 
    private formBuilder: FormBuilder, 
    private cdRef : ChangeDetectorRef,
    private lookupService: LookupService, 
    private headerService: GetHeadersService) 
    { 
      this.id = +this.route.snapshot.paramMap.get('id');
      this.getUser(this.id);
      this.roles = this.lookupService.Roles;
      console.log("Role");
      console.log(headerService.getRole());
      console.log("-------------");
    }

    ngAfterContentChecked() 
    {
      this.cdRef.detectChanges();  
    }    

  ngOnInit() 
  {       
    this.registerForm = this.formBuilder.group({
      frmFirstName: ['', Validators.required],
      frmLastName: ['', Validators.required],
      frmMiddleName: [''],
      frmRole: ['', Validators.required],
      frmEmail: ['', [Validators.required, Validators.email]],
      frmMobile: ['', [Validators.required, Validators.minLength(10)]],
      frmUserName: ['', Validators.required],
      frmPassword: ['', [Validators.required, Validators.minLength(6)]],
      frmdateOfBirth: ['', Validators.required]
      });      
  }
  
  getUser(id: number) {
    this.userlistService.userGet(id)
      .subscribe(
        data => {
          this.user = data;
        },
        error => {
          if (error.status == '401') {
            console.log("Error", error);
            this.userauthService.refreshToken(); 
          }
        }
      );
  }

  addEvent(type: string, mydate: Date) 
  {
    this.user.dateOfBirth = mydate;    
  }

     // convenience getter for easy access to form fields
     get f() { return this.registerForm.controls; }

     onSubmit() {
         this.submitted = true;
 
         // stop here if form is invalid
         if (this.registerForm.invalid) {
             return;
         }
         this.save();
         
     }

  save(): void
        {          
          this.useraddeditService.userAddEdit(this.user)
          .subscribe(
                      data => { 
                        var editUrl = '/userlist/'; 
                        this.router.navigate([editUrl]);    
                      }, 
                      error => { console.log("Rrror", error); }
                    );
        }

        goBack(): void {
          this.location.back();
        }
 
}

import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../services/userlist.service';
import { Router } from '@angular/router';
import { UserListModel } from '../models/UserListModel';
import { Observable, of } from 'rxjs';
import { UserauthenticateService } from '../services/userauthenticate.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  model: UserListModel = new UserListModel();
  public pageNo: number = 1;
  public totalCount: number = 0;
  public totalPages: number = 0;

  users: Observable<any>;

  constructor(
    private router: Router,
    private userlistService: UserlistService,
    private userauthService: UserauthenticateService) { 

      if(localStorage.getItem('mlpageNo')!==null){
        this.pageNo = parseInt(localStorage.getItem('mlpageNo'));
      }      
      this.getUsrs();
      
      localStorage.setItem('mlpageNo', this.pageNo.toString());
    }

  ngOnInit() {
    
  }  

  next() : void {
    this.pageNo = this.pageNo + 1;
    localStorage.setItem('mlpageNo', this.pageNo.toString());
    this.getUsrs();
  }

  previous() : void {
    this.pageNo = this.pageNo - 1;
    localStorage.setItem('mlpageNo', this.pageNo.toString());
    this.getUsrs();
  }

  getUsrs() {
    this.userlistService.userList("flase", "", this.pageNo.toString())
      .subscribe(
        dt => {
          this.users = dt.data.data;
          this.totalCount = dt.data.totalCount;  
          this.totalPages = dt.data.totalPages; 
          
        },
        error => {
          if (error.status == '401') {
            console.log("Error", error);
            this.userauthService.refreshToken(); 
          }
        }
      );
  }
 
}

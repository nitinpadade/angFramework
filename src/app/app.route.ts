import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EmployeerProfileComponent } from './employeer-profile/employeer-profile.component';
import { AddEmployerProfileComponent } from './add-employer-profile/add-employer-profile.component';
import { JobseekerProfileComponent } from './jobseeker-profile/jobseeker-profile.component';
import { AddjobseekerprofileComponent } from './addjobseekerprofile/addjobseekerprofile.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'adduser/:id', component: AdduserComponent },
      { path: 'employeer-profile', component: EmployeerProfileComponent },
      { path: 'add-employer-profile', component: AddEmployerProfileComponent },
      { path: 'jobseeker-profile', component: JobseekerProfileComponent },
      { path: 'addjobseekerprofile', component: AddjobseekerprofileComponent }

    ]
  },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' });
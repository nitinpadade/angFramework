import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { routing } from './app.route';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SidebarDirective } from './sidebar.directive';
import { LogoutComponent } from './logout/logout.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatInputModule,MatNativeDateModule,DateAdapter } from '@angular/material';
import { MAT_DATE_LOCALE } from '@angular/material';
import { ValuedatetimeDirective } from './valuedatetime.directive';
import { DatechangecompComponent } from './datechangecomp/datechangecomp.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { EmployeerProfileComponent } from './employeer-profile/employeer-profile.component';
import { AddEmployerProfileComponent } from './add-employer-profile/add-employer-profile.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NoSanitizePipe } from './NoSanitizePipe';
import { JobseekerProfileComponent } from './jobseeker-profile/jobseeker-profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { AddjobseekerprofileComponent } from './addjobseekerprofile/addjobseekerprofile.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material';
//const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
 
@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    HomeComponent,
    DashboardComponent,
    MenuComponent,
    SidebarDirective,
    LogoutComponent,
    UserlistComponent,
    AdduserComponent,
    ValuedatetimeDirective,
    DatechangecompComponent,
    NumbersOnlyDirective,
    EmployeerProfileComponent,
    AddEmployerProfileComponent,
    NoSanitizePipe,
    JobseekerProfileComponent,
    AddjobseekerprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    MatDatepickerModule, MatInputModule,MatNativeDateModule,
    HttpClientModule,
    RichTextEditorAllModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    routing   
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,  
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
   // { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
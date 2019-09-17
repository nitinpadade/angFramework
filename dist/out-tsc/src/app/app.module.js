import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
const rootRouting = RouterModule.forRoot([], { useHash: true });
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
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
            AdduserComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            routing
        ],
        providers: [CookieService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
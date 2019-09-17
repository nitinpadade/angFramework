import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
export const AppRoutes = [
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
            { path: 'adduser/:id', component: AdduserComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' });
//# sourceMappingURL=app.route.js.map
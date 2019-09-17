import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeLayoutComponent = class HomeLayoutComponent {
    constructor(userauthService, router, cookieService) {
        this.userauthService = userauthService;
        this.router = router;
        this.cookieService = cookieService;
        this.navbarOpen = false;
        this.dropDownOpen = false;
        this.dropEmployeer = false;
        this.dropJobSeekers = false;
    }
    ngOnInit() {
        this.nav = false;
        this.userauthService.isUserLogin()
            .subscribe(nav => this.nav = nav);
        if (!this.nav) {
            var returnUrl = '/login';
            this.router.navigate([returnUrl]);
        }
        this.loggedInUser = this.cookieService.get('loggedInUser');
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    toggledropdown() {
        this.dropDownOpen = !this.dropDownOpen;
        this.dropEmployeer = false;
        this.dropJobSeekers = false;
    }
    toggleEmployeer() {
        this.dropEmployeer = !this.dropEmployeer;
        this.dropJobSeekers = false;
        this.dropDownOpen = false;
    }
    toggleJobSeekers() {
        this.dropJobSeekers = !this.dropJobSeekers;
        this.dropEmployeer = false;
        this.dropDownOpen = false;
    }
};
HomeLayoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home-layout',
        templateUrl: './home-layout.component.html',
        styleUrls: ['./home-layout.component.css']
    })
], HomeLayoutComponent);
export { HomeLayoutComponent };
//# sourceMappingURL=home-layout.component.js.map
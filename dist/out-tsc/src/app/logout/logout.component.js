import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LogoutComponent = class LogoutComponent {
    constructor(userauthService, router) {
        this.userauthService = userauthService;
        this.router = router;
    }
    ngOnInit() {
        this.logOut();
        var returnUrl = '/login/';
        this.router.navigate([returnUrl]);
    }
    logOut() {
        this.userauthService.userLogout().subscribe(data => {
            console.log(data);
        });
    }
};
LogoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-logout',
        templateUrl: './logout.component.html',
        styleUrls: ['./logout.component.css']
    })
], LogoutComponent);
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(userauthService, router) {
        this.userauthService = userauthService;
        this.router = router;
        this.title = 'ClientApp';
    }
    ngOnInit() {
        this.nav = false;
        this.userauthService.isUserLogin()
            .subscribe(nav => this.nav = nav);
        if (!this.nav) {
            var returnUrl = '/login';
            this.router.navigate([returnUrl]);
        }
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
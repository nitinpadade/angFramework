import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserListModel } from '../models/UserListModel';
let UserlistComponent = class UserlistComponent {
    constructor(router, userlistService, userauthService) {
        this.router = router;
        this.userlistService = userlistService;
        this.userauthService = userauthService;
        this.model = new UserListModel();
    }
    ngOnInit() {
        this.getUsrs();
    }
    getUsrs() {
        this.userlistService.userList()
            .subscribe(data => {
            console.log(data);
            this.users = data;
        }, error => {
            if (error.status == '401') {
                console.log("Error", error);
                this.userauthService.refreshToken();
            }
        });
    }
};
UserlistComponent = tslib_1.__decorate([
    Component({
        selector: 'app-userlist',
        templateUrl: './userlist.component.html',
        styleUrls: ['./userlist.component.css']
    })
], UserlistComponent);
export { UserlistComponent };
//# sourceMappingURL=userlist.component.js.map
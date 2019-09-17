import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserAddEditModel } from '../models/UserAddEditModel';
let AdduserComponent = class AdduserComponent {
    //users: Observable<any>;
    constructor(route, location, router, useraddeditService, userlistService, userauthService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.useraddeditService = useraddeditService;
        this.userlistService = userlistService;
        this.userauthService = userauthService;
        this.user = new UserAddEditModel();
        this.submitted = false;
        this.userRoles = [
            {
                "Id": 1,
                "Name": "Administrator"
            },
            {
                "Id": 2,
                "Name": "Employer"
            },
            {
                "Id": 3,
                "Name": "Job Seeker"
            }
        ];
    }
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.getUser(this.id);
    }
    getUser(id) {
        this.userlistService.userGet(id)
            .subscribe(data => {
            console.log(data);
            this.user = data;
        }, error => {
            if (error.status == '401') {
                console.log("Error", error);
                this.userauthService.refreshToken();
            }
        });
    }
    save() {
        this.submitted = true;
        console.log(this.user);
        this.useraddeditService.userAddEdit(this.user)
            .subscribe(data => {
            console.log(data);
            var editUrl = '/userlist/';
            this.router.navigate([editUrl]);
        }, error => { console.log("Rrror", error); });
    }
    goBack() {
        this.location.back();
    }
};
AdduserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-adduser',
        templateUrl: './adduser.component.html',
        styleUrls: ['./adduser.component.css']
    })
], AdduserComponent);
export { AdduserComponent };
//# sourceMappingURL=adduser.component.js.map
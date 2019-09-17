import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
let UserlistService = class UserlistService {
    constructor(http, headersService) {
        this.http = http;
        this.headersService = headersService;
    }
    userList() {
        const userListServiceUrl = 'http://localhost:3122/api/Users';
        return this.http.get(userListServiceUrl, this.headersService.headerOptions());
    }
    userGet(id) {
        const userListServiceUrl = 'http://localhost:3122/api/Users/' + id.toString();
        return this.http.get(userListServiceUrl, this.headersService.headerOptions());
    }
};
UserlistService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserlistService);
export { UserlistService };
//# sourceMappingURL=userlist.service.js.map
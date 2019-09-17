import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UseraddeditService = class UseraddeditService {
    constructor(http, headersService) {
        this.http = http;
        this.headersService = headersService;
    }
    userAddEdit(userAddEdit) {
        const userAddEditServiceUrl = 'http://localhost:3122/api/Users/save';
        return this.http.post(userAddEditServiceUrl, userAddEdit, this.headersService.headerOptions());
    }
};
UseraddeditService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UseraddeditService);
export { UseraddeditService };
//# sourceMappingURL=useraddedit.service.js.map
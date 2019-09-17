import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let GetHeadersService = class GetHeadersService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    headerOptions() {
        var authHeader = 'Bearer ' + this.cookieService.get('token');
        let httpHeaders = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': authHeader
        });
        let options = {
            headers: httpHeaders
        };
        return options;
    }
};
GetHeadersService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GetHeadersService);
export { GetHeadersService };
//# sourceMappingURL=get-headers.service.js.map
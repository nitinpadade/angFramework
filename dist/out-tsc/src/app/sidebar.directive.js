import * as tslib_1 from "tslib";
import { Directive, HostListener, HostBinding } from '@angular/core';
let SidebarDirective = class SidebarDirective {
    constructor() {
        this.click = false;
    }
    onClic() {
        this.click = !this.click;
    }
};
tslib_1.__decorate([
    HostBinding('class.is-open')
], SidebarDirective.prototype, "click", void 0);
tslib_1.__decorate([
    HostListener('click')
], SidebarDirective.prototype, "onClic", null);
SidebarDirective = tslib_1.__decorate([
    Directive({
        selector: '[appSidebar]',
        exportAs: 'appSidebar'
    })
], SidebarDirective);
export { SidebarDirective };
//# sourceMappingURL=sidebar.directive.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* organization-controller
*/
var OrganizationController = /** @class */ (function () {
    function OrganizationController() {
    }
    OrganizationController.prototype.syncOrgs = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    OrganizationController.prototype.save = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    OrganizationController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    OrganizationController.prototype.record = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    OrganizationController.prototype.getList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "departmentId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "parentDepartmentId": "@ctitle(10, 20)", "parentDepartmentName": "@ctitle(10, 20)", "relatedConfig": "@ctitle(10, 20)", "status": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    OrganizationController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    OrganizationController.prototype.genSyncResult = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return OrganizationController;
}());
// @ts-ignore
exports.default = new OrganizationController();
//# sourceMappingURL=organizationController.js.map
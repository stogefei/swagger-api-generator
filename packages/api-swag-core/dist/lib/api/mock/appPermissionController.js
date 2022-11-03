"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* app-permission-controller
*/
var AppPermissionController = /** @class */ (function () {
    function AppPermissionController() {
    }
    AppPermissionController.prototype.updateGroup = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.sort = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.saveSchemaPermissions = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.resource = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.rename = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.removeGroups = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.propertyResource = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "name": "@cname" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.listSchemaPermission = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "propertyPermissions|20": [{ "code": "@ctitle(10, 20)", "name": "@cname" }], "schemaCode": "@ctitle(10, 20)", "schemaName": "@ctitle(10, 20)", "viewActionPermissions|20": [""], "workflowPermissions|20": [{ "code": "@ctitle(10, 20)", "name": "@cname" }] }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.listGroups = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "appCode": "@ctitle(10, 20)", "grantType": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "sortKey": "@integer(0, 100)", "subjects|20": [{ "avatar": "@ctitle(10, 20)", "departmentName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "type": "@ctitle(10, 20)" }] }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.getSchemaPermission = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPermissionController.prototype.createGroup = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return AppPermissionController;
}());
// @ts-ignore
exports.default = new AppPermissionController();
//# sourceMappingURL=appPermissionController.js.map
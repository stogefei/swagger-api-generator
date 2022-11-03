"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* login-controller
*/
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.ssoLogin = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    LoginController.prototype.logout = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    LoginController.prototype.login = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    LoginController.prototype.getOrgList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "departmentId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "parentDepartmentId": "@ctitle(10, 20)", "parentDepartmentName": "@ctitle(10, 20)", "relatedConfig": "@ctitle(10, 20)", "status": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    LoginController.prototype.genRsaKey = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return LoginController;
}());
// @ts-ignore
exports.default = new LoginController();
//# sourceMappingURL=loginController.js.map
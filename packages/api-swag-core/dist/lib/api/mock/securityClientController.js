"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* security-client-controller
*/
var SecurityClientController = /** @class */ (function () {
    function SecurityClientController() {
    }
    SecurityClientController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SecurityClientController.prototype.resetSecret = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SecurityClientController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SecurityClientController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "accessTokenValiditySeconds": "@integer(0, 100)", "clientId": "@ctitle(10, 20)", "clientName": "@ctitle(10, 20)", "clientSecret": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "modifiedTime": "@ctitle(10, 20)", "refreshTokenValiditySeconds": "@integer(0, 100)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SecurityClientController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return SecurityClientController;
}());
// @ts-ignore
exports.default = new SecurityClientController();
//# sourceMappingURL=securityClientController.js.map
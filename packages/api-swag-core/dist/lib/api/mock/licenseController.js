"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* license-controller
*/
var LicenseController = /** @class */ (function () {
    function LicenseController() {
    }
    LicenseController.prototype.serverInfo = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    LicenseController.prototype.info = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return LicenseController;
}());
// @ts-ignore
exports.default = new LicenseController();
//# sourceMappingURL=licenseController.js.map
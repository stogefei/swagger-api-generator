"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* security-controller
*/
var SecurityController = /** @class */ (function () {
    function SecurityController() {
    }
    SecurityController.prototype.genRsaKey = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return SecurityController;
}());
// @ts-ignore
exports.default = new SecurityController();
//# sourceMappingURL=securityController.js.map
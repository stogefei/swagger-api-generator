"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* external-controller
*/
var ExternalController = /** @class */ (function () {
    function ExternalController() {
    }
    ExternalController.prototype.submit = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ExternalController.prototype.startWorkflow = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ExternalController.prototype.load = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return ExternalController;
}());
// @ts-ignore
exports.default = new ExternalController();
//# sourceMappingURL=externalController.js.map
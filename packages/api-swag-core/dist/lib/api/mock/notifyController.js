"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* notify-controller
*/
var NotifyController = /** @class */ (function () {
    function NotifyController() {
    }
    NotifyController.prototype.wechat_1 = function () {
        return mockjs_1.default.mock("");
    };
    NotifyController.prototype.wechat = function () {
        return mockjs_1.default.mock("");
    };
    NotifyController.prototype.openapi = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    NotifyController.prototype.dingtalk_1 = function () {
        return mockjs_1.default.mock("");
    };
    NotifyController.prototype.dingtalk = function () {
        return mockjs_1.default.mock("");
    };
    return NotifyController;
}());
// @ts-ignore
exports.default = new NotifyController();
//# sourceMappingURL=notifyController.js.map
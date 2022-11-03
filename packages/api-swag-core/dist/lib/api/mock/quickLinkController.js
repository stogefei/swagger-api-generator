"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* quick-link-controller
*/
var QuickLinkController = /** @class */ (function () {
    function QuickLinkController() {
    }
    QuickLinkController.prototype.save = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    QuickLinkController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "appCode": "@ctitle(10, 20)", "formCode": "@ctitle(10, 20)", "funCode": "@ctitle(10, 20)", "funId": "@ctitle(10, 20)", "funName": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    QuickLinkController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    QuickLinkController.prototype.add = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return QuickLinkController;
}());
// @ts-ignore
exports.default = new QuickLinkController();
//# sourceMappingURL=quickLinkController.js.map
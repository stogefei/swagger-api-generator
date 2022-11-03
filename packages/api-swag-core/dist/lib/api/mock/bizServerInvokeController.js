"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-server-invoke-controller
*/
var BizServerInvokeController = /** @class */ (function () {
    function BizServerInvokeController() {
    }
    BizServerInvokeController.prototype.bizRule = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServerInvokeController.prototype.bizBus = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizServerInvokeController;
}());
// @ts-ignore
exports.default = new BizServerInvokeController();
//# sourceMappingURL=bizServerInvokeController.js.map
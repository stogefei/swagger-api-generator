"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-service-categroy-controller
*/
var BizServiceCategroyController = /** @class */ (function () {
    function BizServiceCategroyController() {
    }
    BizServiceCategroyController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceCategroyController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceCategroyController.prototype.getList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "id": "@ctitle(10, 20)", "name": "@cname", "serviceList|20": [{ "categroyId": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "protocolType": "@ctitle(10, 20)" }] }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceCategroyController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizServiceCategroyController;
}());
// @ts-ignore
exports.default = new BizServiceCategroyController();
//# sourceMappingURL=bizServiceCategroyController.js.map
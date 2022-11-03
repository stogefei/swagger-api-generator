"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-service-controller
*/
var BizServiceController = /** @class */ (function () {
    function BizServiceController() {
    }
    BizServiceController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceController.prototype.listServiceTree = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "id": "@ctitle(10, 20)", "name": "@cname", "serviceList|20": [{ "categroyId": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "protocolType": "@ctitle(10, 20)" }] }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceController.prototype.listAll = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "categroyId": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "protocolType": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceController.prototype.getList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "categroyId": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "protocolType": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizServiceController;
}());
// @ts-ignore
exports.default = new BizServiceController();
//# sourceMappingURL=bizServiceController.js.map
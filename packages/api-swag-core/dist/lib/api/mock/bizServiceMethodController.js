"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-service-method-controller
*/
var BizServiceMethodController = /** @class */ (function () {
    function BizServiceMethodController() {
    }
    BizServiceMethodController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceMethodController.prototype.testConnect = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceMethodController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceMethodController.prototype.getList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "name": "@cname", "protocolType": "@ctitle(10, 20)", "serviceCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceMethodController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceMethodController.prototype.bizServiceMethodVo = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizServiceMethodController.prototype.batchList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "name": "@cname", "protocolType": "@ctitle(10, 20)", "serviceCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizServiceMethodController;
}());
// @ts-ignore
exports.default = new BizServiceMethodController();
//# sourceMappingURL=bizServiceMethodController.js.map
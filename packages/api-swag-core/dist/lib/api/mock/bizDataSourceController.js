"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-data-source-controller
*/
var BizDataSourceController = /** @class */ (function () {
    function BizDataSourceController() {
    }
    BizDataSourceController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizDataSourceController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizDataSourceController.prototype.getList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "description": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "password": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "url": "@ctitle(10, 20)", "username": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizDataSourceController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizDataSourceController;
}());
// @ts-ignore
exports.default = new BizDataSourceController();
//# sourceMappingURL=bizDataSourceController.js.map
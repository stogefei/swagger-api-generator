"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-rule-controller
*/
var BizRuleController = /** @class */ (function () {
    function BizRuleController() {
    }
    BizRuleController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.rename = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.queryBySchemaCode = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "createdBy": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "creatorName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "modifiedBy": "@ctitle(10, 20)", "modifiedTime": "@ctitle(10, 20)", "name": "@cname", "schemaCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.list_1 = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "id": "@ctitle(10, 20)", "name": "@cname", "schemaCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "createdBy": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "creatorName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "modifiedBy": "@ctitle(10, 20)", "modifiedTime": "@ctitle(10, 20)", "name": "@cname", "schemaCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.get_1 = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizRuleController.prototype.clone = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizRuleController;
}());
// @ts-ignore
exports.default = new BizRuleController();
//# sourceMappingURL=bizRuleController.js.map
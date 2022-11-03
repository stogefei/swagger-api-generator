"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-schema-event-controller
*/
var BizSchemaEventController = /** @class */ (function () {
    function BizSchemaEventController() {
    }
    BizSchemaEventController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizSchemaEventController.prototype.queryBySchemaCode = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "bindType": "@ctitle(10, 20)", "eventType": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "inputJson": "@ctitle(10, 20)", "inputSchemaCode": "@ctitle(10, 20)", "methodCode": "@ctitle(10, 20)", "name": "@cname", "outputJson": "@ctitle(10, 20)", "outputSchemaCode": "@ctitle(10, 20)", "ruleId": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "serviceCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizSchemaEventController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "bindType": "@ctitle(10, 20)", "eventType": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "inputJson": "@ctitle(10, 20)", "inputSchemaCode": "@ctitle(10, 20)", "methodCode": "@ctitle(10, 20)", "name": "@cname", "outputJson": "@ctitle(10, 20)", "outputSchemaCode": "@ctitle(10, 20)", "ruleId": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "serviceCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizSchemaEventController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizSchemaEventController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizSchemaEventController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizSchemaEventController;
}());
// @ts-ignore
exports.default = new BizSchemaEventController();
//# sourceMappingURL=bizSchemaEventController.js.map
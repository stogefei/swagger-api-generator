"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-object-controller
*/
var BizObjectController = /** @class */ (function () {
    function BizObjectController() {
    }
    BizObjectController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.uniqueValidate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.temporary = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.listTemplateData = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.listSheetDatas = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{}], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.listProperty = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.insert = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.getList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{}], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.batchUpdate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{}], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizObjectController.prototype.batchListSheetDatas = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizObjectController;
}());
// @ts-ignore
exports.default = new BizObjectController();
//# sourceMappingURL=bizObjectController.js.map
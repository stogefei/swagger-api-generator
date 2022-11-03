"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-view-controller
*/
var BizViewController = /** @class */ (function () {
    function BizViewController() {
    }
    BizViewController.prototype.updateVisible = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizViewController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizViewController.prototype.sort = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizViewController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizViewController.prototype.publish = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizViewController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "actions|20": [{ "actionCode": "@ctitle(10, 20)", "actionName": "@ctitle(10, 20)", "actionType": "@ctitle(10, 20)", "clientType": "@ctitle(10, 20)", "correlationCode": "@ctitle(10, 20)", "correlationType": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sortKey": "@integer(0, 100)", "viewCode": "@ctitle(10, 20)" }], "clientType": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "columns|20": [{ "clientType": "@ctitle(10, 20)", "displayName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "propertyCode": "@ctitle(10, 20)", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sortKey": "@integer(0, 100)", "viewCode": "@ctitle(10, 20)", "width": "@integer(0, 100)" }], "conditions|20": [{ "clientType": "@ctitle(10, 20)", "defaultValueType": "@ctitle(10, 20)", "displayName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "propertyCode": "@ctitle(10, 20)", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sortKey": "@integer(0, 100)", "viewCode": "@ctitle(10, 20)" }], "correlationCode": "@ctitle(10, 20)", "glueSource": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "propertys|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "correlationFormDisplayColumn": "@ctitle(10, 20)", "correlationFormSchemaCode": "@ctitle(10, 20)", "correlationFormSchemaName": "@ctitle(10, 20)", "correlationSchemaAppName": "@ctitle(10, 20)", "correlationSchemaCode": "@ctitle(10, 20)", "correlationSchemaName": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "mainSchemaCode": "@ctitle(10, 20)", "name": "@cname", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "schemaCode": "@ctitle(10, 20)", "schemaType": "@ctitle(10, 20)", "sortKey": "@integer(0, 100)", "sorts|20": [{ "clientType": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "propertyCode": "@ctitle(10, 20)", "propertyName": "@ctitle(10, 20)", "propertyType": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)", "sortKey": "@integer(0, 100)", "sortType": "@ctitle(10, 20)", "viewCode": "@ctitle(10, 20)" }] }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizViewController.prototype.getViewInfo = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizViewController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizViewController;
}());
// @ts-ignore
exports.default = new BizViewController();
//# sourceMappingURL=bizViewController.js.map
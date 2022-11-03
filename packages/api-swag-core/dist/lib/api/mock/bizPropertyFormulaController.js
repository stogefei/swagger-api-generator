"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* biz-property-formula-controller
*/
var BizPropertyFormulaController = /** @class */ (function () {
    function BizPropertyFormulaController() {
    }
    BizPropertyFormulaController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizPropertyFormulaController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizPropertyFormulaController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "formula": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "schemaCode": "@ctitle(10, 20)", "sheetCode": "@ctitle(10, 20)", "sheetName": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    BizPropertyFormulaController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return BizPropertyFormulaController;
}());
// @ts-ignore
exports.default = new BizPropertyFormulaController();
//# sourceMappingURL=bizPropertyFormulaController.js.map
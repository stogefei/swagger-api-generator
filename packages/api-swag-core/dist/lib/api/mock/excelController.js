"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* excel-controller
*/
var ExcelController = /** @class */ (function () {
    function ExcelController() {
    }
    ExcelController.prototype.import = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ExcelController.prototype.getImportProgress = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ExcelController.prototype.getExportProgress = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ExcelController.prototype.excelExport = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ExcelController.prototype.downloadTemplate = function () {
        return mockjs_1.default.mock("");
    };
    return ExcelController;
}());
// @ts-ignore
exports.default = new ExcelController();
//# sourceMappingURL=excelController.js.map
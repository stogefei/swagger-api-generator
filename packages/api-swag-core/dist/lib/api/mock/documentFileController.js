"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* document-file-controller
*/
var DocumentFileController = /** @class */ (function () {
    function DocumentFileController() {
    }
    DocumentFileController.prototype.upload_1 = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    DocumentFileController.prototype.uploadTemp = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    DocumentFileController.prototype.upload = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    DocumentFileController.prototype.documentId_2 = function () {
        return mockjs_1.default.mock("");
    };
    DocumentFileController.prototype.documentId_1 = function () {
        return mockjs_1.default.mock("");
    };
    DocumentFileController.prototype.documentId = function () {
        return mockjs_1.default.mock("");
    };
    DocumentFileController.prototype.deleteTemp = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    DocumentFileController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return DocumentFileController;
}());
// @ts-ignore
exports.default = new DocumentFileController();
//# sourceMappingURL=documentFileController.js.map
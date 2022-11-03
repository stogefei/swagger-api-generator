"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* app-package-controller
*/
var AppPackageController = /** @class */ (function () {
    function AppPackageController() {
    }
    AppPackageController.prototype.visiblePerGroup = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.visibleAll = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.modify = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.listOwn = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "modelFunTrees|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)", "visibleRange": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.listGroupBy = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.listEnable = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "modelFunTrees|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)", "visibleRange": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "modelFunTrees|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)", "visibleRange": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.groupUpdate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.groupRemove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.groupList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "id": "@ctitle(10, 20)", "name": "@cname", "sortIndex": "@integer(0, 100)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.groupAdd = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.getByCode = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.enable = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.disable = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    AppPackageController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return AppPackageController;
}());
// @ts-ignore
exports.default = new AppPackageController();
//# sourceMappingURL=appPackageController.js.map
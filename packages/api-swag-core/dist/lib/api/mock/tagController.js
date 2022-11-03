"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* tag-controller
*/
var TagController = /** @class */ (function () {
    function TagController() {
    }
    TagController.prototype.updateTag = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.searchTagGroup = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.saveUserToTag = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.saveGroup = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.removeUnits = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.removeTag = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.removeGroup = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.getUserListByPage = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.getTagTreeWithoutOrg = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    TagController.prototype.batchSaveTag = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return TagController;
}());
// @ts-ignore
exports.default = new TagController();
//# sourceMappingURL=tagController.js.map
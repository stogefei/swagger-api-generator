"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* model-fun-tree-controller
*/
var ModelFunTreeController = /** @class */ (function () {
    function ModelFunTreeController() {
    }
    ModelFunTreeController.prototype.tree = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ModelFunTreeController.prototype.sort = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ModelFunTreeController.prototype.rename = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return ModelFunTreeController;
}());
// @ts-ignore
exports.default = new ModelFunTreeController();
//# sourceMappingURL=modelFunTreeController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* workflow-runtime-controller
*/
var WorkflowRuntimeController = /** @class */ (function () {
    function WorkflowRuntimeController() {
    }
    WorkflowRuntimeController.prototype.searchWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.searchMyInstances = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.searchHistoricWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.searchHistoricCirculateWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.searchCirculateWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.searchBatchWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.searchAllWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.searchAllHistoricWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.listWrokflow = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "code": "@ctitle(10, 20)", "funType": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "sortIndex": "@integer(0, 100)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.listWorkItems = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowRuntimeController.prototype.listInstances = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return WorkflowRuntimeController;
}());
// @ts-ignore
exports.default = new WorkflowRuntimeController();
//# sourceMappingURL=workflowRuntimeController.js.map
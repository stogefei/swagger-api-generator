"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* workflow-delegate-controller
*/
var WorkflowDelegateController = /** @class */ (function () {
    function WorkflowDelegateController() {
    }
    WorkflowDelegateController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDelegateController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "endTime": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "startTime": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "workflows|20": [{ "code": "@ctitle(10, 20)", "name": "@cname" }] }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDelegateController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDelegateController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return WorkflowDelegateController;
}());
// @ts-ignore
exports.default = new WorkflowDelegateController();
//# sourceMappingURL=workflowDelegateController.js.map
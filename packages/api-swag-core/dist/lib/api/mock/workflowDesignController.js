"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* workflow-design-controller
*/
var WorkflowDesignController = /** @class */ (function () {
    function WorkflowDesignController() {
    }
    WorkflowDesignController.prototype.validateWorkflowTemplate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "errorLevel": "@ctitle(10, 20)", "errorMessage": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.validateParticipantExpr = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.updateWorkflowHeader = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.saveWorkflowTemplate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.remove = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.publishWorkflowTemplate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "appCode": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "icon": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "schemaCode": "@ctitle(10, 20)", "shortLinkCode": "@ctitle(10, 20)", "visibleType": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.getWorkflowTemplate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.getWorkflowDraft = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.getHistoricPublishedList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "description": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "procDefId": "@ctitle(10, 20)", "publishTime": "@ctitle(10, 20)", "publisher": "@ctitle(10, 20)", "publisherName": "@ctitle(10, 20)", "version": "@integer(0, 100)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.createWorkflow = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    WorkflowDesignController.prototype.clone = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return WorkflowDesignController;
}());
// @ts-ignore
exports.default = new WorkflowDesignController();
//# sourceMappingURL=workflowDesignController.js.map
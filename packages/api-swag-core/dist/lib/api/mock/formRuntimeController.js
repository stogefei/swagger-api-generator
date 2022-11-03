"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* form-runtime-controller
*/
var FormRuntimeController = /** @class */ (function () {
    function FormRuntimeController() {
    }
    FormRuntimeController.prototype.viewCorrelationForm = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormRuntimeController.prototype.remind = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormRuntimeController.prototype.loadWorkflowData = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormRuntimeController.prototype.loadSheetDatas = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{}], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormRuntimeController.prototype.loadDataByCommentId = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormRuntimeController.prototype.loadBizData = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormRuntimeController.prototype.calculate = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "errorMsg": "@ctitle(10, 20)", "propertyCode": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return FormRuntimeController;
}());
// @ts-ignore
exports.default = new FormRuntimeController();
//# sourceMappingURL=formRuntimeController.js.map
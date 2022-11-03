"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* workbench-controller
*/
var WorkbenchController = /** @class */ (function () {
    function WorkbenchController() {
    }
    WorkbenchController.prototype.getFigure = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return WorkbenchController;
}());
// @ts-ignore
exports.default = new WorkbenchController();
//# sourceMappingURL=workbenchController.js.map
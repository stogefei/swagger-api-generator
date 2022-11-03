"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* sys-params-controller
*/
var SysParamsController = /** @class */ (function () {
    function SysParamsController() {
    }
    SysParamsController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return SysParamsController;
}());
// @ts-ignore
exports.default = new SysParamsController();
//# sourceMappingURL=sysParamsController.js.map
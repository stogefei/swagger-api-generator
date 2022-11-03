"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* olap-runtime-controller
*/
var OlapRuntimeController = /** @class */ (function () {
    function OlapRuntimeController() {
    }
    OlapRuntimeController.prototype.query = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return OlapRuntimeController;
}());
// @ts-ignore
exports.default = new OlapRuntimeController();
//# sourceMappingURL=olapRuntimeController.js.map
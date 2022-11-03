"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* olap-controller
*/
var OlapController = /** @class */ (function () {
    function OlapController() {
    }
    OlapController.prototype.query = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return OlapController;
}());
// @ts-ignore
exports.default = new OlapController();
//# sourceMappingURL=olapController.js.map
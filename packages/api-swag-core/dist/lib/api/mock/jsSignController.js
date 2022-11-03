"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* js-sign-controller
*/
var JsSignController = /** @class */ (function () {
    function JsSignController() {
    }
    JsSignController.prototype.wechat = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return JsSignController;
}());
// @ts-ignore
exports.default = new JsSignController();
//# sourceMappingURL=jsSignController.js.map
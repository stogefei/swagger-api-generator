"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* short-link-controller
*/
var ShortLinkController = /** @class */ (function () {
    function ShortLinkController() {
    }
    ShortLinkController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data": "@ctitle(10, 20)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    ShortLinkController.prototype.batchGet = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [""], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return ShortLinkController;
}());
// @ts-ignore
exports.default = new ShortLinkController();
//# sourceMappingURL=shortLinkController.js.map
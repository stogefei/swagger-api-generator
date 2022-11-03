"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* portal-user-biz-controller
*/
var PortalUserBizController = /** @class */ (function () {
    function PortalUserBizController() {
    }
    PortalUserBizController.prototype.list = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "id": "@ctitle(10, 20)", "userId": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    PortalUserBizController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    PortalUserBizController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return PortalUserBizController;
}());
// @ts-ignore
exports.default = new PortalUserBizController();
//# sourceMappingURL=portalUserBizController.js.map
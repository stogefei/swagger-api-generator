"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* sys-dict-controller
*/
var SysDictController = /** @class */ (function () {
    function SysDictController() {
    }
    SysDictController.prototype.update = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SysDictController.prototype.page = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SysDictController.prototype.listByDictId = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "childList|20": [{ "childList|20": [{ "childList|20": [{ "childList|20": [{ "childList|20": [], "code": "@ctitle(10, 20)", "dictId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "remark": "@ctitle(10, 20)" }], "code": "@ctitle(10, 20)", "dictId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "remark": "@ctitle(10, 20)" }], "code": "@ctitle(10, 20)", "dictId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "remark": "@ctitle(10, 20)" }], "code": "@ctitle(10, 20)", "dictId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "remark": "@ctitle(10, 20)" }], "code": "@ctitle(10, 20)", "dictId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "parentId": "@ctitle(10, 20)", "remark": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SysDictController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SysDictController.prototype.changeStatus = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    SysDictController.prototype.add = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return SysDictController;
}());
// @ts-ignore
exports.default = new SysDictController();
//# sourceMappingURL=sysDictController.js.map
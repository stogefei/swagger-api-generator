"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* id-generator-controller
*/
var IdGeneratorController = /** @class */ (function () {
    function IdGeneratorController() {
    }
    IdGeneratorController.prototype.generateIds = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [""], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return IdGeneratorController;
}());
// @ts-ignore
exports.default = new IdGeneratorController();
//# sourceMappingURL=idGeneratorController.js.map
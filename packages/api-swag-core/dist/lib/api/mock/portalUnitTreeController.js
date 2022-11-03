"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* portal-unit-tree-controller
*/
var PortalUnitTreeController = /** @class */ (function () {
    function PortalUnitTreeController() {
    }
    PortalUnitTreeController.prototype.search_1 = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    PortalUnitTreeController.prototype.search = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    PortalUnitTreeController.prototype.getchildrenList = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "avatar": "@ctitle(10, 20)", "children|20": [{ "avatar": "@ctitle(10, 20)", "children|20": [{ "avatar": "@ctitle(10, 20)", "children|20": [{ "avatar": "@ctitle(10, 20)", "children|20": [{ "avatar": "@ctitle(10, 20)", "children|20": [], "departmentFullName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "queryCode": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }], "departmentFullName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "queryCode": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }], "departmentFullName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "queryCode": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }], "departmentFullName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "queryCode": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }], "departmentFullName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "queryCode": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return PortalUnitTreeController;
}());
// @ts-ignore
exports.default = new PortalUnitTreeController();
//# sourceMappingURL=portalUnitTreeController.js.map
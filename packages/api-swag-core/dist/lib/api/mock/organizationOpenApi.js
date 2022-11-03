"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* organization-open-api
*/
var OrganizationOpenApi = /** @class */ (function () {
    function OrganizationOpenApi() {
    }
    OrganizationOpenApi.prototype.getByCode = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return OrganizationOpenApi;
}());
// @ts-ignore
exports.default = new OrganizationOpenApi();
//# sourceMappingURL=organizationOpenApi.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* portal-form-template-controller
*/
var PortalFormTemplateController = /** @class */ (function () {
    function PortalFormTemplateController() {
    }
    PortalFormTemplateController.prototype.getByCode = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    PortalFormTemplateController.prototype.findBySchemaCode = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "code": "@ctitle(10, 20)", "content": "@ctitle(10, 20)", "formData": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "schemaCode": "@ctitle(10, 20)", "settings": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return PortalFormTemplateController;
}());
// @ts-ignore
exports.default = new PortalFormTemplateController();
//# sourceMappingURL=portalFormTemplateController.js.map
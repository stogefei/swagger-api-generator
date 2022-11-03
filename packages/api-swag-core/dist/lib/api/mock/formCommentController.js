"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* form-comment-controller
*/
var FormCommentController = /** @class */ (function () {
    function FormCommentController() {
    }
    FormCommentController.prototype.queryAtUser = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormCommentController.prototype.findByBizObjectId = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "avatar": "@ctitle(10, 20)", "bizObjectId": "@ctitle(10, 20)", "childList|20": [{ "avatar": "@ctitle(10, 20)", "bizObjectId": "@ctitle(10, 20)", "childList|20": [{ "avatar": "@ctitle(10, 20)", "bizObjectId": "@ctitle(10, 20)", "childList|20": [{ "avatar": "@ctitle(10, 20)", "bizObjectId": "@ctitle(10, 20)", "childList|20": [{ "avatar": "@ctitle(10, 20)", "bizObjectId": "@ctitle(10, 20)", "childList|20": [], "content": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "documentIdList|20": [], "formCode": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "instanceId": "@ctitle(10, 20)", "receiveUserIdList|20": [], "receiveUserList|20": [], "replyCommentId": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)" }], "content": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "documentIdList|20": [""], "formCode": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "instanceId": "@ctitle(10, 20)", "receiveUserIdList|20": [""], "receiveUserList|20": [{ "avatar": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "type": "@ctitle(10, 20)" }], "replyCommentId": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)" }], "content": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "documentIdList|20": [""], "formCode": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "instanceId": "@ctitle(10, 20)", "receiveUserIdList|20": [""], "receiveUserList|20": [{ "avatar": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "type": "@ctitle(10, 20)" }], "replyCommentId": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)" }], "content": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "documentIdList|20": [""], "formCode": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "instanceId": "@ctitle(10, 20)", "receiveUserIdList|20": [""], "receiveUserList|20": [{ "avatar": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "type": "@ctitle(10, 20)" }], "replyCommentId": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)" }], "content": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "documentIdList|20": [""], "formCode": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "instanceId": "@ctitle(10, 20)", "receiveUserIdList|20": [""], "receiveUserList|20": [{ "avatar": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "name": "@cname", "type": "@ctitle(10, 20)" }], "replyCommentId": "@ctitle(10, 20)", "schemaCode": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormCommentController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    FormCommentController.prototype.create = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return FormCommentController;
}());
// @ts-ignore
exports.default = new FormCommentController();
//# sourceMappingURL=formCommentController.js.map
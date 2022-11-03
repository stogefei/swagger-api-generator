"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
// @ts-ignore
var mockjs_1 = require("mockjs");
/**
* user-controller
*/
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.updateQuitRemark = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.save = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.restore = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.resetPwd = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.listQuitUsers = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.get = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.disable = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.delete = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.batchSave = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "data|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [{ "children|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [""], "departments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [""], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [""], "partTimeDepartments|20": [{ "children|20": [{ "children|20": [], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [] }], "fullDeptName": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "managerId": "@ctitle(10, 20)", "name": "@cname", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)", "type": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)", "userCounts": "@integer(0, 100)", "userList|20": [{ "avatar": "@ctitle(10, 20)", "code": "@ctitle(10, 20)", "departmentIds|20": [], "departments|20": [], "email": "@email", "employeeNo": "@ctitle(10, 20)", "entryDate": "@ctitle(10, 20)", "gender": "@integer(0, 100)", "id": "@ctitle(10, 20)", "idCard": "@ctitle(10, 20)", "mainDepartmentId": "@ctitle(10, 20)", "managerWorkflowCodeList|20": [], "mobile": "@natural(10000)", "name": "@cname", "orgId": "@ctitle(10, 20)", "partTimeDepartmentIds|20": [], "partTimeDepartments|20": [], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [], "tags|20": [], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }] }], "position": "@ctitle(10, 20)", "quitDate": "@ctitle(10, 20)", "remarks": "@ctitle(10, 20)", "status": "@ctitle(10, 20)", "tagIds|20": [""], "tags|20": [{ "code": "@ctitle(10, 20)", "createdBy": "@ctitle(10, 20)", "createdName": "@ctitle(10, 20)", "createdTime": "@ctitle(10, 20)", "groupId": "@ctitle(10, 20)", "id": "@ctitle(10, 20)", "maintainType": "@ctitle(10, 20)", "name": "@cname", "nodeType": "@ctitle(10, 20)", "orgId": "@ctitle(10, 20)", "parentId": "@ctitle(10, 20)" }], "telphone": "@ctitle(10, 20)", "unitType": "@ctitle(10, 20)" }], "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    UserController.prototype.batchMoveUserDept = function () {
        return mockjs_1.default.mock({ "bizKey": "@ctitle(10, 20)", "code": "@integer(0, 100)", "msg": "@ctitle(10, 20)", "traceId": "@ctitle(10, 20)" });
    };
    return UserController;
}());
// @ts-ignore
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
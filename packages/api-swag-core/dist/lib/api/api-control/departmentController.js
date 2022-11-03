"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentController = void 0;
var index_1 = require("../../index");
/**
 * department-controller
 */
var DepartmentController = /** @class */ (function () {
    function DepartmentController() {
    }
    /**
     * 根据关键字搜索组织
     * @param keyword - string - query - 关键字 - 必填
     */
    DepartmentController.prototype.search = function (keyword) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/search',
                            method: 'get',
                            params: { keyword: keyword },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 保存部门
     * @param departmentVo - DepartmentVo - body - departmentVo - 必填
     */
    DepartmentController.prototype.save = function (departmentVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/save',
                            method: 'post',
                            data: departmentVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 移除用户
     * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
     */
    DepartmentController.prototype.removeUser = function (deptUserIdsVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/removeUser',
                            method: 'post',
                            data: deptUserIdsVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 移除部门
     * @param deptIds - Array<string> - body - deptIds - 必填
     */
    DepartmentController.prototype.remove = function (deptIds) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/remove',
                            method: 'post',
                            data: deptIds,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 根据父级id获取子级部门与用户列表
     * @param parentId - string - query - 父id - 可空
     */
    DepartmentController.prototype.listChildUnit = function (parentId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/listChildUnit',
                            method: 'get',
                            params: { parentId: parentId },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 分页获取部门下用户列表
     * @param deptId - string - query - 部门id - 必填
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    DepartmentController.prototype.getDeptUserListByPage = function (deptId, pageNum, pageSize, keyword) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/getDeptUserListByPage',
                            method: 'get',
                            params: { deptId: deptId, keyword: keyword, pageNum: pageNum, pageSize: pageSize },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取部门下用户列表
     * @param deptId - string - query - 部门id - 必填
     */
    DepartmentController.prototype.getDeptUserList = function (deptId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/getDeptUserList',
                            method: 'get',
                            params: { deptId: deptId },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 根据父级id获取子级部门列表
     * @param queryChildDeptVo - QueryChildDeptVo - body - queryChildDeptVo - 必填
     */
    DepartmentController.prototype.getChildList = function (queryChildDeptVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/getChildList',
                            method: 'post',
                            data: queryChildDeptVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取完整组织树
     * @param parentId - string - query - 父id - 必填
     */
    DepartmentController.prototype.getAllDeptTree = function (parentId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/getAllDeptTree',
                            method: 'get',
                            params: { parentId: parentId },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取部门详情
     * @param deptId - string - query - 部门id - 必填
     */
    DepartmentController.prototype.get = function (deptId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/get',
                            method: 'get',
                            params: { deptId: deptId },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 批量新增部门
     * @param batchDeptInsertVo - BatchDeptInsertVo - body - batchDeptInsertVo - 必填
     */
    DepartmentController.prototype.batchSaveDept = function (batchDeptInsertVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/org/dept/batchSaveDept',
                            method: 'post',
                            data: batchDeptInsertVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return DepartmentController;
}());
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=departmentController.js.map
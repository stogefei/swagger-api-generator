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
exports.AdminRoleController = void 0;
var index_1 = require("../../index");
/**
 * admin-role-controller
 */
var AdminRoleController = /** @class */ (function () {
    function AdminRoleController() {
    }
    /**
     * 修改管理组
     * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
     */
    AdminRoleController.prototype.updateAdminRole = function (adminRoleVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/updateAdminRole',
                            method: 'post',
                            data: adminRoleVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 授予管理组权限
     * @param saveAdminRolePermissionVo - SaveAdminRolePermissionVo - body - saveAdminRolePermissionVo - 必填
     */
    AdminRoleController.prototype.grantPermissions = function (saveAdminRolePermissionVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/grantPermissions',
                            method: 'post',
                            data: saveAdminRolePermissionVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取角色详情，包含直接子级
     * @param roleId - string - query - 管理组id - 必填
     * @param roleType - string - query - 角色类型 - 必填
     */
    AdminRoleController.prototype.getRoleInfo = function (roleId, roleType) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/getRoleInfo',
                            method: 'get',
                            params: { roleId: roleId, roleType: roleType },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取角色可授予的权限范围
     * @param roleId - string - query - 管理组id - 必填
     */
    AdminRoleController.prototype.getPermissionRange = function (roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/getPermissionRange',
                            method: 'get',
                            params: { roleId: roleId },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 删除管理组
     * @param roleIds - Array<string> - body - roleIds - 必填
     */
    AdminRoleController.prototype.deleteAdminRole = function (roleIds) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/deleteAdminRole',
                            method: 'post',
                            data: roleIds,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 新增管理组
     * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
     */
    AdminRoleController.prototype.createAdminRole = function (adminRoleVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/createAdminRole',
                            method: 'post',
                            data: adminRoleVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取管理员角色架构图树
     */
    AdminRoleController.prototype.chartTree = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/chartTree',
                            method: 'get',
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 批量授予管理组权限
     * @param batchSaveAdminRolePermissionVo - BatchSaveAdminRolePermissionVo - body - batchSaveAdminRolePermissionVo - 必填
     */
    AdminRoleController.prototype.batchGrantPermissions = function (batchSaveAdminRolePermissionVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/permission/adminRole/batchGrantPermissions',
                            method: 'post',
                            data: batchSaveAdminRolePermissionVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return AdminRoleController;
}());
exports.AdminRoleController = AdminRoleController;
//# sourceMappingURL=adminRoleController.js.map
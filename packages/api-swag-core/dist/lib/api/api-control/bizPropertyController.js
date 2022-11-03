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
exports.BizPropertyController = void 0;
var index_1 = require("../../index");
/**
 * biz-property-controller
 */
var BizPropertyController = /** @class */ (function () {
    function BizPropertyController() {
    }
    /**
     * 数据项排序
     * @param bizPropertySortVo - BizPropertySortVo - body - bizPropertySortVo - 必填
     */
    BizPropertyController.prototype.sort = function (bizPropertySortVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/sort',
                            method: 'post',
                            data: bizPropertySortVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 删除数据项
     * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
     */
    BizPropertyController.prototype.remove = function (schemaPropertyCodeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/remove',
                            method: 'post',
                            data: schemaPropertyCodeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 修改数据项
     * @param bizPropertyVo - BizPropertyVo - body - bizPropertyVo - 必填
     */
    BizPropertyController.prototype.modify = function (bizPropertyVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/modify',
                            method: 'post',
                            data: bizPropertyVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取数据项列表
     * @param schemaCode - string - query - 模型编码 - 必填
     * @param loadSheetSysProperty - boolean - query - 是否加载子表系统字段 - 可空
     * @param sortType - string - query - 排序 - 可空
     */
    BizPropertyController.prototype.list = function (schemaCode, loadSheetSysProperty, sortType) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/list',
                            method: 'get',
                            params: { loadSheetSysProperty: loadSheetSysProperty, schemaCode: schemaCode, sortType: sortType },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 根据流程编码获取已发布的数据项列表
     * @param workflowCode - string - query - 流程编码 - 必填
     * @param loadSheetSysProperty - boolean - query - 模型编码 - 可空
     */
    BizPropertyController.prototype.getPublishListByWorkflowCode = function (workflowCode, loadSheetSysProperty) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/getPublishListByWorkflowCode',
                            method: 'get',
                            params: { loadSheetSysProperty: loadSheetSysProperty, workflowCode: workflowCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取已发布的数据项列表
     * @param schemaCode - string - query - 模型编码 - 必填
     * @param loadSheetSysProperty - boolean - query - 是否加载子表系统字段 - 可空
     */
    BizPropertyController.prototype.getPublishList = function (schemaCode, loadSheetSysProperty) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/getPublishList',
                            method: 'get',
                            params: { loadSheetSysProperty: loadSheetSysProperty, schemaCode: schemaCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取数据项详情
     * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
     */
    BizPropertyController.prototype.get = function (schemaPropertyCodeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/get',
                            method: 'post',
                            data: schemaPropertyCodeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 创建数据项
     * @param bizPropertyVo - BizPropertyVo - body - bizPropertyVo - 必填
     */
    BizPropertyController.prototype.create = function (bizPropertyVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/create',
                            method: 'post',
                            data: bizPropertyVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 确认删除数据项
     * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
     */
    BizPropertyController.prototype.confirmRemove = function (schemaPropertyCodeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/confirmRemove',
                            method: 'post',
                            data: schemaPropertyCodeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 根据流程编码批量获取已发布的数据项列表
     * @param workflowCodes - Array<string> - body - workflowCodes - 必填
     */
    BizPropertyController.prototype.batchListPublishByWorkflowCodes = function (workflowCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/batchListPublishByWorkflowCodes',
                            method: 'post',
                            data: workflowCodes,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 批量获取模型已发布的数据项列表
     * @param schemaCodes - Array<string> - body - schemaCodes - 必填
     */
    BizPropertyController.prototype.batchListPublish = function (schemaCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/property/batchListPublish',
                            method: 'post',
                            data: schemaCodes,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return BizPropertyController;
}());
exports.BizPropertyController = BizPropertyController;
//# sourceMappingURL=bizPropertyController.js.map
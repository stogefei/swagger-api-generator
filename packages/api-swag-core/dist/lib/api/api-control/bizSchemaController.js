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
exports.BizSchemaController = void 0;
var index_1 = require("../../index");
/**
 * biz-schema-controller
 */
var BizSchemaController = /** @class */ (function () {
    function BizSchemaController() {
    }
    /**
     * ??????
     * @param param - string - formData - ?????? - ??????
     */
    BizSchemaController.prototype.test = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/test',
                            method: 'post',
                            data: param,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ????????????
     * @param schemaSortVo - SchemaSortVo - body - schemaSortVo - ??????
     */
    BizSchemaController.prototype.sort = function (schemaSortVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/sort',
                            method: 'post',
                            data: schemaSortVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????
     * @param schemaTitleVo - SchemaTitleVo - body - schemaTitleVo - ??????
     */
    BizSchemaController.prototype.saveTitle = function (schemaTitleVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/saveTitle',
                            method: 'post',
                            data: schemaTitleVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ????????????
     * @param codes - Array<string> - body - codes - ??????
     */
    BizSchemaController.prototype.removeSchema = function (codes) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/removeSchema',
                            method: 'post',
                            data: codes,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????
     * @param ids - Array<string> - body - ids - ??????
     */
    BizSchemaController.prototype.removeGroup = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/removeGroup',
                            method: 'post',
                            data: ids,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ????????????
     * @param codes - Array<string> - body - codes - ??????
     */
    BizSchemaController.prototype.publish = function (codes) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/publish',
                            method: 'post',
                            data: codes,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ????????????
     * @param bizSchemaVo - BizSchemaVo - body - bizSchemaVo - ??????
     */
    BizSchemaController.prototype.modifySchema = function (bizSchemaVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/modifySchema',
                            method: 'post',
                            data: bizSchemaVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????
     * @param bizSchemaGroupVo - BizSchemaGroupVo - body - bizSchemaGroupVo - ??????
     */
    BizSchemaController.prototype.modifyGroup = function (bizSchemaGroupVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/modifyGroup',
                            method: 'post',
                            data: bizSchemaGroupVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????
     * @param schemaGroupSortVo - SchemaGroupSortVo - body - schemaGroupSortVo - ??????
     */
    BizSchemaController.prototype.groupSort = function (schemaGroupSortVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/groupSort',
                            method: 'post',
                            data: schemaGroupSortVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ?????????????????????
     * @param schemaCode - string - query - ???????????? - ??????
     */
    BizSchemaController.prototype.getSchemaMetadata = function (schemaCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/getSchemaMetadata',
                            method: 'get',
                            params: { schemaCode: schemaCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????
     * @param schemaCode - string - query - ???????????? - ??????
     */
    BizSchemaController.prototype.getSchemaInfo = function (schemaCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/getSchemaInfo',
                            method: 'get',
                            params: { schemaCode: schemaCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ???????????????
     * @param appCode - string - query - ???????????? - ??????
     */
    BizSchemaController.prototype.getModelTree = function (appCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/getModelTree',
                            method: 'get',
                            params: { appCode: appCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????
     * @param appCode - string - query - ???????????? - ??????
     */
    BizSchemaController.prototype.getModelList = function (appCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/getModelList',
                            method: 'get',
                            params: { appCode: appCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ????????????????????????
     * @param appCode - string - query - ???????????? - ??????
     */
    BizSchemaController.prototype.getGroupTree = function (appCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/getGroupTree',
                            method: 'get',
                            params: { appCode: appCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????????????????????????????????????????
     * @param schemaCode - string - query - ???????????? - ??????
     */
    BizSchemaController.prototype.getCorrlationFormSchema = function (schemaCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/getCorrlationFormSchema',
                            method: 'get',
                            params: { schemaCode: schemaCode },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ????????????
     * @param bizSchemaVo - BizSchemaVo - body - bizSchemaVo - ??????
     */
    BizSchemaController.prototype.createSchema = function (bizSchemaVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/createSchema',
                            method: 'post',
                            data: bizSchemaVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????
     * @param bizSchemaGroupVo - BizSchemaGroupVo - body - bizSchemaGroupVo - ??????
     */
    BizSchemaController.prototype.createGroup = function (bizSchemaGroupVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/schema/createGroup',
                            method: 'post',
                            data: bizSchemaGroupVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return BizSchemaController;
}());
exports.BizSchemaController = BizSchemaController;
//# sourceMappingURL=bizSchemaController.js.map
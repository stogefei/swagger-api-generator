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
exports.WorkflowDesignController = void 0;
var index_1 = require("../../index");
/**
 * workflow-design-controller
 */
var WorkflowDesignController = /** @class */ (function () {
    function WorkflowDesignController() {
    }
    /**
     * 校验流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    WorkflowDesignController.prototype.validateWorkflowTemplate = function (saveWorkflowTemplateVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/validateWorkflowTemplate',
                            method: 'post',
                            data: saveWorkflowTemplateVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 校验参与者函数表达式
     * @param exprValidVo - WorkflowExprValidVo - body - exprValidVo - 必填
     */
    WorkflowDesignController.prototype.validateParticipantExpr = function (exprValidVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/validateParticipantExpr',
                            method: 'get',
                            data: exprValidVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 修改流程模版头
     * @param workflowHeaderVo - WorkflowHeaderVo - body - workflowHeaderVo - 必填
     */
    WorkflowDesignController.prototype.updateWorkflowHeader = function (workflowHeaderVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/updateWorkflowHeader',
                            method: 'post',
                            data: workflowHeaderVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 保存流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    WorkflowDesignController.prototype.saveWorkflowTemplate = function (saveWorkflowTemplateVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/saveWorkflowTemplate',
                            method: 'post',
                            data: saveWorkflowTemplateVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 删除流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    WorkflowDesignController.prototype.remove = function (workflowSchemaCodeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/remove',
                            method: 'post',
                            data: workflowSchemaCodeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 发布流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    WorkflowDesignController.prototype.publishWorkflowTemplate = function (saveWorkflowTemplateVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/publishWorkflowTemplate',
                            method: 'post',
                            data: saveWorkflowTemplateVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 查询流程列表
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    WorkflowDesignController.prototype.list = function (schemaCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/list',
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
     * 查询指定版本号的流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    WorkflowDesignController.prototype.getWorkflowTemplate = function (workflowSchemaCodeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/getWorkflowTemplate',
                            method: 'post',
                            data: workflowSchemaCodeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 查询流程模版草稿
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    WorkflowDesignController.prototype.getWorkflowDraft = function (workflowSchemaCodeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/getWorkflowDraft',
                            method: 'post',
                            data: workflowSchemaCodeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取历史发布流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    WorkflowDesignController.prototype.getHistoricPublishedList = function (workflowSchemaCodeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/getHistoricPublishedList',
                            method: 'post',
                            data: workflowSchemaCodeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 查询流程模版
     * @param code - string - query - 流程编码 - 必填
     */
    WorkflowDesignController.prototype.get = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/get',
                            method: 'get',
                            params: { code: code },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 创建流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    WorkflowDesignController.prototype.createWorkflow = function (saveWorkflowTemplateVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/createWorkflow',
                            method: 'post',
                            data: saveWorkflowTemplateVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 克隆流程
     * @param codeNameVo - CodeNameVo - body - codeNameVo - 必填
     */
    WorkflowDesignController.prototype.clone = function (codeNameVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/admin/model/workflow/clone',
                            method: 'post',
                            data: codeNameVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return WorkflowDesignController;
}());
exports.WorkflowDesignController = WorkflowDesignController;
//# sourceMappingURL=workflowDesignController.js.map
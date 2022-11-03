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
exports.WorkItemRuntimeController = void 0;
var index_1 = require("../../index");
/**
 * work-item-runtime-controller
 */
var WorkItemRuntimeController = /** @class */ (function () {
    function WorkItemRuntimeController() {
    }
    /**
     * 转办待办任务
     * @param workItemTransferVo - WorkItemTransferVo - body - workItemTransferVo - 必填
     */
    WorkItemRuntimeController.prototype.transfer = function (workItemTransferVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/transfer',
                            method: 'post',
                            data: workItemTransferVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 暂存待办任务
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    WorkItemRuntimeController.prototype.temporary = function (workItemSubmitVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/temporary',
                            method: 'post',
                            data: workItemSubmitVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 提交待办任务-发起节点使用
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    WorkItemRuntimeController.prototype.submit = function (workItemSubmitVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/submit',
                            method: 'post',
                            data: workItemSubmitVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 取回
     * @param workItemRetrieveVo - WorkItemRetrieveVo - body - workItemRetrieveVo - 必填
     */
    WorkItemRuntimeController.prototype.retrieve = function (workItemRetrieveVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/retrieve',
                            method: 'post',
                            data: workItemRetrieveVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 驳回待办任务
     * @param workItemRejectVo - WorkItemRejectVo - body - workItemRejectVo - 必填
     */
    WorkItemRuntimeController.prototype.reject = function (workItemRejectVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/reject',
                            method: 'post',
                            data: workItemRejectVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 预测节点审批人
     * @param runtimePredictParticipantVo - RuntimePredictParticipantVo - body - runtimePredictParticipantVo - 必填
     */
    WorkItemRuntimeController.prototype.predictParticipant = function (runtimePredictParticipantVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/predictParticipant',
                            method: 'post',
                            data: runtimePredictParticipantVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 作废
     * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
     */
    WorkItemRuntimeController.prototype.invalid = function (instanceCancelVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/invalid',
                            method: 'post',
                            data: instanceCancelVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 提交任务-不同意
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    WorkItemRuntimeController.prototype.disagree = function (workItemSubmitVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/disagree',
                            method: 'post',
                            data: workItemSubmitVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 结束流程
     * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
     */
    WorkItemRuntimeController.prototype.close = function (instanceCancelVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/close',
                            method: 'post',
                            data: instanceCancelVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 传阅
     * @param workItemCirculateVo - WorkItemCirculateVo - body - workItemCirculateVo - 必填
     */
    WorkItemRuntimeController.prototype.circulate = function (workItemCirculateVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/circulate',
                            method: 'post',
                            data: workItemCirculateVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 提交任务-批量同意
     * @param batchSubmitVo - WorkItemBatchSubmitVo - body - batchSubmitVo - 必填
     */
    WorkItemRuntimeController.prototype.batchAgree = function (batchSubmitVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/batchAgree',
                            method: 'post',
                            data: batchSubmitVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 提交协办任务
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    WorkItemRuntimeController.prototype.assistSubmit = function (workItemSubmitVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/assistSubmit',
                            method: 'post',
                            data: workItemSubmitVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 协办任务
     * @param workItemAssistVo - WorkItemAssistVo - body - workItemAssistVo - 必填
     */
    WorkItemRuntimeController.prototype.assist = function (workItemAssistVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/assist',
                            method: 'post',
                            data: workItemAssistVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 加签
     * @param workItemApposttileVo - WorkItemAddParticipantVo - body - workItemApposttileVo - 必填
     */
    WorkItemRuntimeController.prototype.apposttile = function (workItemApposttileVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/apposttile',
                            method: 'post',
                            data: workItemApposttileVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 提交任务-同意
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    WorkItemRuntimeController.prototype.agree = function (workItemSubmitVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/workitem/agree',
                            method: 'post',
                            data: workItemSubmitVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return WorkItemRuntimeController;
}());
exports.WorkItemRuntimeController = WorkItemRuntimeController;
//# sourceMappingURL=workItemRuntimeController.js.map
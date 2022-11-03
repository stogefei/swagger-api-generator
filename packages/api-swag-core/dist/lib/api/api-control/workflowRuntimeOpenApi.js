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
exports.WorkflowRuntimeOpenApi = void 0;
var index_1 = require("../../index");
/**
 * workflow-runtime-open-api
 */
var WorkflowRuntimeOpenApi = /** @class */ (function () {
    function WorkflowRuntimeOpenApi() {
    }
    /**
     * 查询指定用户代办任务
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    WorkflowRuntimeOpenApi.prototype.searchUserWorkItems = function (searchWorkItemVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/openapi/runtime/workflow/searchUserWorkItems',
                            method: 'post',
                            data: searchWorkItemVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 查询指定用户已办任务列表
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    WorkflowRuntimeOpenApi.prototype.searchUserFinishedWorkItems = function (searchWorkItemVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/openapi/runtime/workflow/searchUserFinishedWorkItems',
                            method: 'post',
                            data: searchWorkItemVo,
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
     * @param predictParticipantVo - PredictParticipantVo - body - predictParticipantVo - 必填
     */
    WorkflowRuntimeOpenApi.prototype.predictParticipant = function (predictParticipantVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/openapi/runtime/workflow/predictParticipant',
                            method: 'post',
                            data: predictParticipantVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 查询指定用户可发起的流程
     * @param type - number - query - 类型：0：全部，1：PC可发起，2：移动可发起 - 必填
     */
    WorkflowRuntimeOpenApi.prototype.listWrokflow = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/openapi/runtime/workflow/listWrokflow',
                            method: 'get',
                            params: { type: type },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 查询流程实例
     * @param searchWorkflowInstanceVo - SearchWorkflowInstanceVo - body - searchWorkflowInstanceVo - 必填
     */
    WorkflowRuntimeOpenApi.prototype.listInstances = function (searchWorkflowInstanceVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/openapi/runtime/workflow/listInstances',
                            method: 'post',
                            data: searchWorkflowInstanceVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 根据流程实例id获取流程当前待办任务列表
     * @param instanceId - string - query - 流程实例id - 必填
     */
    WorkflowRuntimeOpenApi.prototype.getWorkItemsByInstanceId = function (instanceId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/openapi/runtime/workflow/getWorkItemsByInstanceId',
                            method: 'get',
                            params: { instanceId: instanceId },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 根据流程实例id获取审批记录列表
     * @param instanceId - string - query - 流程实例id - 必填
     */
    WorkflowRuntimeOpenApi.prototype.getWorkItemApprovalsByInstanceId = function (instanceId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/openapi/runtime/workflow/getWorkItemApprovalsByInstanceId',
                            method: 'get',
                            params: { instanceId: instanceId },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return WorkflowRuntimeOpenApi;
}());
exports.WorkflowRuntimeOpenApi = WorkflowRuntimeOpenApi;
//# sourceMappingURL=workflowRuntimeOpenApi.js.map
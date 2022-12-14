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
exports.InstanceRuntimeController = void 0;
var index_1 = require("../../index");
/**
 * instance-runtime-controller
 */
var InstanceRuntimeController = /** @class */ (function () {
    function InstanceRuntimeController() {
    }
    /**
     * ??????
     * @param instanceUrgeVo - InstanceUrgeVo - body - instanceUrgeVo - ??????
     */
    InstanceRuntimeController.prototype.urge = function (instanceUrgeVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/urge',
                            method: 'post',
                            data: instanceUrgeVo,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ????????????????????????????????????
     * @param instanceId - string - query - ????????????id - ??????
     */
    InstanceRuntimeController.prototype.tracks = function (instanceId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/tracks',
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
     * ????????????
     * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - ??????
     */
    InstanceRuntimeController.prototype.temporary = function (startWorkflowVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/temporary',
                            method: 'post',
                            data: startWorkflowVo,
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
     * @param instanceId - string - body - instanceId - ??????
     */
    InstanceRuntimeController.prototype.superInvalid = function (instanceId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/superInvalid',
                            method: 'post',
                            data: instanceId,
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
     * @param instanceId - string - body - instanceId - ??????
     */
    InstanceRuntimeController.prototype.superDeleteInstance = function (instanceId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/superDeleteInstance',
                            method: 'post',
                            data: instanceId,
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
     * @param instanceId - string - body - instanceId - ??????
     */
    InstanceRuntimeController.prototype.superClose = function (instanceId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/superClose',
                            method: 'post',
                            data: instanceId,
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
     * @param changeOwnerVo - ChangeOwnerVo - body - changeOwnerVo - ??????
     */
    InstanceRuntimeController.prototype.superChangeOwner = function (changeOwnerVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/superChangeOwner',
                            method: 'post',
                            data: changeOwnerVo,
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
     * @param instanceNodeCancelVo - InstanceNodeCancelVo - body - instanceNodeCancelVo - ??????
     */
    InstanceRuntimeController.prototype.superCancelNode = function (instanceNodeCancelVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/superCancelNode',
                            method: 'post',
                            data: instanceNodeCancelVo,
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
     * @param adjustParticipantVo - InstanceNodeAdjustParticipantVo - body - adjustParticipantVo - ??????
     */
    InstanceRuntimeController.prototype.superAdjustNodeParticipant = function (adjustParticipantVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/superAdjustNodeParticipant',
                            method: 'post',
                            data: adjustParticipantVo,
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
     * @param instanceNodeActivatelVo - InstanceNodeActivatelVo - body - instanceNodeActivatelVo - ??????
     */
    InstanceRuntimeController.prototype.superActivateNode = function (instanceNodeActivatelVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/superActivateNode',
                            method: 'post',
                            data: instanceNodeActivatelVo,
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
     * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - ??????
     */
    InstanceRuntimeController.prototype.startWorkflow = function (startWorkflowVo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/startWorkflow',
                            method: 'post',
                            data: startWorkflowVo,
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
     * @param instanceId - string - query - ????????????id - ??????
     * @param pageNum - number - query - ???????????? - ??????
     * @param pageSize - number - query - ?????????????????? - ??????
     */
    InstanceRuntimeController.prototype.logs = function (instanceId, pageNum, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/logs',
                            method: 'get',
                            params: { instanceId: instanceId, pageNum: pageNum, pageSize: pageSize },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * ??????????????????????????????????????????
     * @param workflowCode - string - query - ???????????? - ??????
     */
    InstanceRuntimeController.prototype.getOriginatorDepartments = function (workflowCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/getOriginatorDepartments',
                            method: 'get',
                            params: { workflowCode: workflowCode },
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
     * @param instanceIds - Array<string> - body - instanceIds - ??????
     */
    InstanceRuntimeController.prototype.delete_1 = function (instanceIds) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/temporary/delete',
                            method: 'post',
                            data: instanceIds,
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
     * @param instanceIds - Array<string> - body - instanceIds - ??????
     */
    InstanceRuntimeController.prototype.delete = function (instanceIds) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.default.Global.request({
                            url: '/portal/runtime/instance/delete',
                            method: 'post',
                            data: instanceIds,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return InstanceRuntimeController;
}());
exports.InstanceRuntimeController = InstanceRuntimeController;
//# sourceMappingURL=instanceRuntimeController.js.map
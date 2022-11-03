"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var axios_1 = require("axios");
var Request = /** @class */ (function () {
    function Request(baseUrl) {
        // 初始化实例对象
        this.instance = axios_1.default.create({
            baseURL: baseUrl,
            timeout: 10 * 1000
        });
        // 初始化拦截器
        this.interceptors = {
            request: this.instance.interceptors.request,
            response: this.instance.interceptors.response
        };
        // 添加默认请求拦截器
        this.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            Promise.reject(error);
        });
        // 添加默认响应拦截器
        this.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    }
    return Request;
}());
exports.default = Request;
//# sourceMappingURL=request.js.map
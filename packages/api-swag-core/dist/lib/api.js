"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./core/index");
// const baseUrl: string = process.env.NODE_ENV === 'development'? '/api': 'http://159.75.221.84:8080/api';
var localUrl = window.localStorage.getItem('baseUrl');
var baseUrl = localUrl ? localUrl + "/api" : '/api';
//console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
function createInstance() {
    var instance = new index_1.default(baseUrl);
    return instance;
}
var api = createInstance();
exports.default = api;
//# sourceMappingURL=api.js.map
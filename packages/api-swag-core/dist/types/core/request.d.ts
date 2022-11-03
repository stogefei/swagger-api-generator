import { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosInterceptorManager } from 'axios';
interface Interceptors {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
}
export default class Request {
    instance: AxiosInstance;
    interceptors: Interceptors;
    constructor(baseUrl: string);
}
export {};

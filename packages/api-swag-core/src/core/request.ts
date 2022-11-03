/* eslint-disable */
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosInstance,
    AxiosInterceptorManager
  } from 'axios'
  interface Interceptors {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }
  export default class Request {
    instance: AxiosInstance
  
    interceptors: Interceptors
  
    constructor(baseUrl: string) {
      // 初始化实例对象
      this.instance = axios.create({
        baseURL: baseUrl,
        timeout: 10 * 1000
      })
  
      // 初始化拦截器
      this.interceptors = {
        request: this.instance.interceptors.request,
        response: this.instance.interceptors.response
      }
  
      // 添加默认请求拦截器
      this.interceptors.request.use(
        config => {
          return config
        },
        error => {
          Promise.reject(error)
        }
      )
  
      // 添加默认响应拦截器
      this.interceptors.response.use(
        response => {
          return response
        },
        error => {
          return Promise.reject(error)
        }
      )
    }
  }
  
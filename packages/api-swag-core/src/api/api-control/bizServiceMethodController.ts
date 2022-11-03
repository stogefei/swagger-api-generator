/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizServiceMethodVo, ResBodyBizServiceMethodVo, BizServiceMethodCodeVo, ResBodyListBizServiceMethodVo, ResBodyVoid, MethodInvokeParamVo, ResBodyobject,
} from '../model';

/**
 * biz-service-method-controller
 */
export class BizServiceMethodController {
  
  /**
   * 修改业务方法
   * @param bizServiceMethodVo - BizServiceMethodVo - body - bizServiceMethodVo - 必填
   */
   async update (bizServiceMethodVo: BizServiceMethodVo) {
    const result:AxiosResponse<ResBodyBizServiceMethodVo> = await API.Global.request({
      url: '/admin/bizbus/service/method/update',
      method: 'post',
      data: bizServiceMethodVo,
    });
    return result;
  }
  
  
  
  /**
   * 测试连接
   * @param invokeParam - MethodInvokeParamVo - body - invokeParam - 必填
   */
   async testConnect (invokeParam: MethodInvokeParamVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/admin/bizbus/service/method/testConnect',
      method: 'post',
      data: invokeParam,
    });
    return result;
  }
  
  
  
  /**
   * 删除业务方法
   * @param bizServiceMethodCodeVo - BizServiceMethodCodeVo - body - bizServiceMethodCodeVo - 必填
   */
   async remove (bizServiceMethodCodeVo: BizServiceMethodCodeVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/bizbus/service/method/remove',
      method: 'post',
      data: bizServiceMethodCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取业务方法列表
   * @param serviceCode - string - query - 业务服务编码 - 必填
   */
   async getList (serviceCode: string) {
    const result:AxiosResponse<ResBodyListBizServiceMethodVo> = await API.Global.request({
      url: '/admin/bizbus/service/method/getList',
      method: 'get',
      params: { serviceCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取指定业务方法
   * @param methodCode - string - query - 业务方法编码 - 必填
   * @param serviceCode - string - query - 业务服务编码 - 必填
   */
   async get (methodCode: string, serviceCode: string) {
    const result:AxiosResponse<ResBodyBizServiceMethodVo> = await API.Global.request({
      url: '/admin/bizbus/service/method/get',
      method: 'get',
      params: { methodCode, serviceCode },
    });
    return result;
  }
  
  
  
  /**
   * 新建业务方法
   * @param bizServiceMethodVo - BizServiceMethodVo - body - bizServiceMethodVo - 必填
   */
   async bizServiceMethodVo (bizServiceMethodVo: BizServiceMethodVo) {
    const result:AxiosResponse<ResBodyBizServiceMethodVo> = await API.Global.request({
      url: '/admin/bizbus/service/method/BizServiceMethodVo',
      method: 'post',
      data: bizServiceMethodVo,
    });
    return result;
  }
  
  
  
  /**
   * 批量获取业务方法
   * @param methodCodeVos - Array<BizServiceMethodCodeVo> - body - methodCodeVos - 必填
   */
   async batchList (methodCodeVos: Array<BizServiceMethodCodeVo>) {
    const result:AxiosResponse<ResBodyListBizServiceMethodVo> = await API.Global.request({
      url: '/admin/bizbus/service/method/batchList',
      method: 'post',
      data: methodCodeVos,
    });
    return result;
  }
  
  
}

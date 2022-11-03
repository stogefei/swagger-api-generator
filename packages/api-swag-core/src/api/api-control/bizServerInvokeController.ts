/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizMethodInvokeVo, ResBodyobject, BizRuleInvokeVo,
} from '../model';

/**
 * biz-server-invoke-controller
 */
export class BizServerInvokeController {
  
  /**
   * 调用业务规则
   * @param invokeVo - BizRuleInvokeVo - body - invokeVo - 必填
   */
   async bizRule (invokeVo: BizRuleInvokeVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/portal/server/invoke/bizRule',
      method: 'post',
      data: invokeVo,
    });
    return result;
  }
  
  
  
  /**
   * 调用业务集成方法
   * @param invokeVo - BizMethodInvokeVo - body - invokeVo - 必填
   */
   async bizBus (invokeVo: BizMethodInvokeVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/portal/server/invoke/bizBus',
      method: 'post',
      data: invokeVo,
    });
    return result;
  }
  
  
}

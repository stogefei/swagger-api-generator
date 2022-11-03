/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    IncrementNotifyVo, ResBodyobject,
} from '../model';

/**
 * notify-controller
 */
export class NotifyController {
  
  /**
   * 微信增量回调消息通知
   * @param body - string - body - body - 可空
   */
   async wechat_1 (body?: string) {
    const result:AxiosResponse<string> = await API.Global.request({
      url: '/third/notify/wechat',
      method: 'post',
      data: body,
    });
    return result;
  }
  
  
  
  /**
   * 微信增量回调消息通知
   * @param body - string - body - body - 可空
   */
   async wechat (body?: string) {
    const result:AxiosResponse<string> = await API.Global.request({
      url: '/third/notify/wechat',
      method: 'get',
      data: body,
    });
    return result;
  }
  
  
  
  /**
   * openApi类型增量回调事件处理
   * @param incrementNotifyVo - IncrementNotifyVo - body - incrementNotifyVo - 必填
   */
   async openapi (incrementNotifyVo: IncrementNotifyVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/third/notify/openapi',
      method: 'post',
      data: incrementNotifyVo,
    });
    return result;
  }
  
  
  
  /**
   * 钉钉增量回调消息通知
   * @param body - string - body - body - 必填
   */
   async dingtalk_1 (body: string | any) {
    const result:AxiosResponse<any> = await API.Global.request({
      url: '/third/notify/dingtalk',
      method: 'post',
      data: body,
    });
    return result;
  }
  
  
  
  /**
   * 钉钉增量回调消息通知
   * @param body - string - body - body - 必填
   */
   async dingtalk (body: string | any) {
    const result:AxiosResponse<any> = await API.Global.request({
      url: '/third/notify/dingtalk',
      method: 'get',
      data: body,
    });
    return result;
  }
  
  
}

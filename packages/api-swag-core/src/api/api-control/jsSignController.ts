/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    UrlVo, ResBodyWxJsapiSignature,
} from '../model';

/**
 * js-sign-controller
 */
export class JsSignController {
  
  /**
   * 微信js签名
   * @param urlVo - UrlVo - body - urlVo - 必填
   */
   async wechat (urlVo: UrlVo) {
    const result:AxiosResponse<ResBodyWxJsapiSignature> = await API.Global.request({
      url: '/portal/js/sign/wechat',
      method: 'post',
      data: urlVo,
    });
    return result;
  }
  
  
}

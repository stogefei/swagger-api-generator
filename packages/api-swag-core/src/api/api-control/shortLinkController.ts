/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ShortLink, ResBodyListstring, ResBodystring,
} from '../model';

/**
 * short-link-controller
 */
export class ShortLinkController {
  
  /**
   * 获取短链接
   * @param shortLink - ShortLink - body - shortLink - 必填
   */
   async get (shortLink: ShortLink) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/system/shortlink/get',
      method: 'post',
      data: shortLink,
    });
    return result;
  }
  
  
  
  /**
   * 批量获取短链接
   * @param shortLinks - Array<ShortLink> - body - shortLinks - 必填
   */
   async batchGet (shortLinks: Array<ShortLink>) {
    const result:AxiosResponse<ResBodyListstring> = await API.Global.request({
      url: '/system/shortlink/batchGet',
      method: 'post',
      data: shortLinks,
    });
    return result;
  }
  
  
}

/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    QuickLinkFunVo, ResBodyVoid, ResBodyListQuickLinkVo,
} from '../model';

/**
 * quick-link-controller
 */
export class QuickLinkController {
  
  /**
   * 保存快捷链接
   * @param quickLinkFuns - Array<QuickLinkFunVo> - body - quickLinkFuns - 必填
   */
   async save (quickLinkFuns: Array<QuickLinkFunVo>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/workbench/quicklink/save',
      method: 'post',
      data: quickLinkFuns,
    });
    return result;
  }
  
  
  
  /**
   * 获取当前用户设置的快捷链接
   */
   async list () {
    const result:AxiosResponse<ResBodyListQuickLinkVo> = await API.Global.request({
      url: '/portal/workbench/quicklink/list',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 删除快捷链接
   * @param quickLinkFunVo - QuickLinkFunVo - body - quickLinkFunVo - 必填
   */
   async delete (quickLinkFunVo: QuickLinkFunVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/workbench/quicklink/delete',
      method: 'post',
      data: quickLinkFunVo,
    });
    return result;
  }
  
  
  
  /**
   * 新增快捷链接
   * @param quickLinkFunVo - QuickLinkFunVo - body - quickLinkFunVo - 必填
   */
   async add (quickLinkFunVo: QuickLinkFunVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/workbench/quicklink/add',
      method: 'post',
      data: quickLinkFunVo,
    });
    return result;
  }
  
  
}

/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizMenuVo, ResBodyBizMenuVo, CodeVo, ResBodyVoid,
} from '../model';

/**
 * biz-menu-controller
 */
export class BizMenuController {
  
  /**
   * 删除自定义菜单
   * @param codeVo - CodeVo - body - codeVo - 必填
   */
   async remove (codeVo: CodeVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/menu/remove',
      method: 'post',
      data: codeVo,
    });
    return result;
  }
  
  
  
  /**
   * 修改自定义菜单
   * @param bizMenuVo - BizMenuVo - body - bizMenuVo - 必填
   */
   async modify (bizMenuVo: BizMenuVo) {
    const result:AxiosResponse<ResBodyBizMenuVo> = await API.Global.request({
      url: '/admin/model/menu/modify',
      method: 'post',
      data: bizMenuVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取自定义菜单详情
   * @param code - string - query - 菜单编码 - 必填
   */
   async get (code: string) {
    const result:AxiosResponse<ResBodyBizMenuVo> = await API.Global.request({
      url: '/admin/model/menu/get',
      method: 'get',
      params: { code },
    });
    return result;
  }
  
  
  
  /**
   * 创建自定义菜单
   * @param bizMenuVo - BizMenuVo - body - bizMenuVo - 必填
   */
   async create (bizMenuVo: BizMenuVo) {
    const result:AxiosResponse<ResBodyBizMenuVo> = await API.Global.request({
      url: '/admin/model/menu/create',
      method: 'post',
      data: bizMenuVo,
    });
    return result;
  }
  
  
}

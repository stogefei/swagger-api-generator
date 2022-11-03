/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyGenKeyResultVo, ResBodyListOrganizationVo, LoginVo, ResBodystring, ResBodyVoid,
} from '../model';

/**
 * login-controller
 */
export class LoginController {
  
  /**
   * 免密登录
   * @param code - string - query - 授权码 - 必填
   * @param corpId - string - query - 第三方企业id - 必填
   * @param authType - string - query - 免密登陆类型 - 可空
   */
   async ssoLogin (code: string, corpId: string, authType?: string) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/auth/ssoLogin',
      method: 'get',
      params: { authType, code, corpId },
    });
    return result;
  }
  
  
  
  /**
   * 账户登出
   */
   async logout () {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/auth/logout',
      method: 'delete',
    });
    return result;
  }
  
  
  
  /**
   * 账户登录
   * @param loginVo - LoginVo - body - loginVo - 必填
   */
   async login (loginVo: LoginVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/auth/login',
      method: 'post',
      data: loginVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取登陆组织列表
   */
   async getOrgList () {
    const result:AxiosResponse<ResBodyListOrganizationVo> = await API.Global.request({
      url: '/auth/getOrgList',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 获取加密公钥
   */
   async genRsaKey () {
    const result:AxiosResponse<ResBodyGenKeyResultVo> = await API.Global.request({
      url: '/auth/genRsaKey',
      method: 'get',
    });
    return result;
  }
  
  
}

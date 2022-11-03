/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    SecurityClientVo, ResBodySecurityClientVo, ResBodyListSecurityClientVo, IDVo, ResBodyVoid, ResBodystring,
} from '../model';

/**
 * security-client-controller
 */
export class SecurityClientController {
  
  /**
   * 创建客户端
   * @param securityClientVo - SecurityClientVo - body - securityClientVo - 必填
   */
   async update (securityClientVo: SecurityClientVo) {
    const result:AxiosResponse<ResBodySecurityClientVo> = await API.Global.request({
      url: '/admin/system/security/update',
      method: 'post',
      data: securityClientVo,
    });
    return result;
  }
  
  
  
  /**
   * 重置客户端密钥
   * @param idVo - IDVo - body - idVo - 必填
   */
   async resetSecret (idVo: IDVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/admin/system/security/resetSecret',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除客户端
   * @param idVo - IDVo - body - idVo - 必填
   */
   async remove (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/system/security/remove',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取客户端列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListSecurityClientVo> = await API.Global.request({
      url: '/admin/system/security/list',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 创建客户端
   * @param securityClientVo - SecurityClientVo - body - securityClientVo - 必填
   */
   async create (securityClientVo: SecurityClientVo) {
    const result:AxiosResponse<ResBodySecurityClientVo> = await API.Global.request({
      url: '/admin/system/security/create',
      method: 'post',
      data: securityClientVo,
    });
    return result;
  }
  
  
}

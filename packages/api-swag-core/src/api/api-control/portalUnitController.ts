/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    OrgAscriptionCheckVo, ResBodyboolean, ResBodyUserVo, ResBodyUserMappingInfoVo, IDVo, ResBodyVoid, UpdatePasswordVo,
} from '../model';

/**
 * portal-unit-controller
 */
export class PortalUnitController {
  
  /**
   * 修改密码
   * @param updatePasswordVo - UpdatePasswordVo - body - updatePasswordVo - 必填
   */
   async updatePwd (updatePasswordVo: UpdatePasswordVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/unit/updatePwd',
      method: 'post',
      data: updatePasswordVo,
    });
    return result;
  }
  
  
  
  /**
   * 修改当前登陆用户头像
   * @param idVo - IDVo - body - idVo - 必填
   */
   async updateAvatar (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/unit/updateAvatar',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询用户映射信息
   * @param userId - string - query - 用户id - 必填
   */
   async getUserMappingInfo (userId: string) {
    const result:AxiosResponse<ResBodyUserMappingInfoVo> = await API.Global.request({
      url: '/portal/unit/getUserMappingInfo',
      method: 'get',
      params: { userId },
    });
    return result;
  }
  
  
  
  /**
   * 获取用户信息
   * @param userId - string - query - 用户id - 必填
   */
   async getUserInfo (userId: string) {
    const result:AxiosResponse<ResBodyUserVo> = await API.Global.request({
      url: '/portal/unit/getUserInfo',
      method: 'get',
      params: { userId },
    });
    return result;
  }
  
  
  
  /**
   * 获取当前登陆用户信息
   */
   async getCurUserInfo () {
    const result:AxiosResponse<ResBodyUserVo> = await API.Global.request({
      url: '/portal/unit/getCurUserInfo',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 组织属于、拥有校验
   * @param orgAscriptionCheckVo - OrgAscriptionCheckVo - body - orgAscriptionCheckVo - 必填
   */
   async belongToCheck (orgAscriptionCheckVo: OrgAscriptionCheckVo) {
    const result:AxiosResponse<ResBodyboolean> = await API.Global.request({
      url: '/portal/unit/belongToCheck',
      method: 'post',
      data: orgAscriptionCheckVo,
    });
    return result;
  }
  
  
}

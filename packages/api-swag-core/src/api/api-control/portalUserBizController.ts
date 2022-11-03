/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    SignFileVo, ResBodyVoid, IDVo, ResBodyListUserCommonsVo,
} from '../model';

/**
 * portal-user-biz-controller
 */
export class PortalUserBizController {
  
  /**
   * 查询当前用户常用审批附件列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListUserCommonsVo> = await API.Global.request({
      url: '/portal/user/biz/common/list',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 删除常用审批附件
   * @param idVo - IDVo - body - idVo - 必填
   */
   async delete (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/user/biz/common/delete',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 新增常用审批附件
   * @param signFileVo - SignFileVo - body - signFileVo - 必填
   */
   async create (signFileVo: SignFileVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/user/biz/common/create',
      method: 'post',
      data: signFileVo,
    });
    return result;
  }
  
  
}

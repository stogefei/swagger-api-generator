/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodystring, SearchWorkItemVo, ResBodyPageVOWorkItemVo, UserTransferVo,
} from '../model';

/**
 * user-biz-controller
 */
export class UserBizController {
  
  /**
   * 工作交接
   * @param userTransferVo - UserTransferVo - body - userTransferVo - 必填
   */
   async transfer (userTransferVo: UserTransferVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/admin/org/user/biz/transfer',
      method: 'post',
      data: userTransferVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询指定用户代办任务
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchUserWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/admin/org/user/biz/searchUserWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 工作交接结果获取
   * @param taskId - string - query - taskId - 必填
   */
   async genResult (taskId: string) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/admin/org/user/biz/genResult',
      method: 'get',
      params: { taskId },
    });
    return result;
  }
  
  
}

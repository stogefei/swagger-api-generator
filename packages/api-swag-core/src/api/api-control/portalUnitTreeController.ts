/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    QueryUnitTreeVo, ResBodyListUnitTreeVo, ResBodyUnitTreeSearchVo, QueryUserVo,
} from '../model';

/**
 * portal-unit-tree-controller
 */
export class PortalUnitTreeController {
  
  /**
   * 搜索人员
   * @param queryUserVo - QueryUserVo - body - queryUserVo - 必填
   */
   async search_1 (queryUserVo: QueryUserVo) {
    const result:AxiosResponse<ResBodyUnitTreeSearchVo> = await API.Global.request({
      url: '/portal/unit/tree/user/search',
      method: 'post',
      data: queryUserVo,
    });
    return result;
  }
  
  
  
  /**
   * 搜索人员、部门
   * @param queryUnitTreeVo - QueryUnitTreeVo - body - queryUnitTreeVo - 必填
   */
   async search (queryUnitTreeVo: QueryUnitTreeVo) {
    const result:AxiosResponse<ResBodyUnitTreeSearchVo> = await API.Global.request({
      url: '/portal/unit/tree/search',
      method: 'post',
      data: queryUnitTreeVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据父级id获取子级部门列表
   * @param queryUnitTreeVo - QueryUnitTreeVo - body - queryUnitTreeVo - 必填
   */
   async getchildrenList (queryUnitTreeVo: QueryUnitTreeVo) {
    const result:AxiosResponse<ResBodyListUnitTreeVo> = await API.Global.request({
      url: '/portal/unit/tree/getchildrenList',
      method: 'post',
      data: queryUnitTreeVo,
    });
    return result;
  }
  
  
}

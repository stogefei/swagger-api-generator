/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizViewVo, ResBodyBizViewVo, BizViewQueryVo, ResBodyListBizViewVo, ResBodyVoid, BizViewSortVo, BizViewVisibleVo,
} from '../model';

/**
 * biz-view-controller
 */
export class BizViewController {
  
  /**
   * 修改可见端
   * @param bizViewVisibleVo - BizViewVisibleVo - body - bizViewVisibleVo - 必填
   */
   async updateVisible (bizViewVisibleVo: BizViewVisibleVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/view/updateVisible',
      method: 'post',
      data: bizViewVisibleVo,
    });
    return result;
  }
  
  
  
  /**
   * 编辑视图
   * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
   */
   async update (bizViewVo: BizViewVo) {
    const result:AxiosResponse<ResBodyBizViewVo> = await API.Global.request({
      url: '/admin/model/view/update',
      method: 'post',
      data: bizViewVo,
    });
    return result;
  }
  
  
  
  /**
   * 排序
   * @param sortVo - BizViewSortVo - body - sortVo - 必填
   */
   async sort (sortVo: BizViewSortVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/view/sort',
      method: 'post',
      data: sortVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除视图
   * @param bizViewQueryVo - BizViewQueryVo - body - bizViewQueryVo - 必填
   */
   async remove (bizViewQueryVo: BizViewQueryVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/view/remove',
      method: 'post',
      data: bizViewQueryVo,
    });
    return result;
  }
  
  
  
  /**
   * 发布视图
   * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
   */
   async publish (bizViewVo: BizViewVo) {
    const result:AxiosResponse<ResBodyBizViewVo> = await API.Global.request({
      url: '/admin/model/view/publish',
      method: 'post',
      data: bizViewVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取视图列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async list (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizViewVo> = await API.Global.request({
      url: '/admin/model/view/list',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取视图详情
   * @param bizViewQueryVo - BizViewQueryVo - body - bizViewQueryVo - 必填
   */
   async getViewInfo (bizViewQueryVo: BizViewQueryVo) {
    const result:AxiosResponse<ResBodyBizViewVo> = await API.Global.request({
      url: '/admin/model/view/getViewInfo',
      method: 'post',
      data: bizViewQueryVo,
    });
    return result;
  }
  
  
  
  /**
   * 创建视图
   * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
   */
   async create (bizViewVo: BizViewVo) {
    const result:AxiosResponse<ResBodyBizViewVo> = await API.Global.request({
      url: '/admin/model/view/create',
      method: 'post',
      data: bizViewVo,
    });
    return result;
  }
  
  
}

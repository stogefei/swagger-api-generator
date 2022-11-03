/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizServiceCategoryVo, ResBodyBizServiceCategoryVo, ResBodyListBizServiceCategoryVo, ResBodyVoid,
} from '../model';

/**
 * biz-service-categroy-controller
 */
export class BizServiceCategroyController {
  
  /**
   * 修改目录
   * @param bizServiceCategoryVo - BizServiceCategoryVo - body - bizServiceCategoryVo - 必填
   */
   async update (bizServiceCategoryVo: BizServiceCategoryVo) {
    const result:AxiosResponse<ResBodyBizServiceCategoryVo> = await API.Global.request({
      url: '/admin/bizbus/service/categroy/update',
      method: 'post',
      data: bizServiceCategoryVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除目录
   * @param ids - Array<string> - body - ids - 必填
   */
   async remove (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/bizbus/service/categroy/remove',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 根据关键字获取目录列表
   * @param keyword - string - query - 关键字 - 可空
   */
   async getList (keyword?: string) {
    const result:AxiosResponse<ResBodyListBizServiceCategoryVo> = await API.Global.request({
      url: '/admin/bizbus/service/categroy/getList',
      method: 'get',
      params: { keyword },
    });
    return result;
  }
  
  
  
  /**
   * 新建目录
   * @param bizServiceCategoryVo - BizServiceCategoryVo - body - bizServiceCategoryVo - 必填
   */
   async create (bizServiceCategoryVo: BizServiceCategoryVo) {
    const result:AxiosResponse<ResBodyBizServiceCategoryVo> = await API.Global.request({
      url: '/admin/bizbus/service/categroy/create',
      method: 'post',
      data: bizServiceCategoryVo,
    });
    return result;
  }
  
  
}

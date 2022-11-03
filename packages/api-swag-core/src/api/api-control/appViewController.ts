/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizViewQueryVo, ResBodyBizViewVo, ResBodyListBizViewVo, BizViewDataQueryVo, ResBodyPageVOMapstringobject,
} from '../model';

/**
 * app-view-controller
 */
export class AppViewController {
  
  /**
   * 查询数据
   * @param bizViewDataQueryVo - BizViewDataQueryVo - body - bizViewDataQueryVo - 必填
   */
   async listData (bizViewDataQueryVo: BizViewDataQueryVo) {
    const result:AxiosResponse<ResBodyPageVOMapstringobject> = await API.Global.request({
      url: '/portal/view/listData',
      method: 'post',
      data: bizViewDataQueryVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取视图列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async list (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizViewVo> = await API.Global.request({
      url: '/portal/view/list',
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
      url: '/portal/view/getViewInfo',
      method: 'post',
      data: bizViewQueryVo,
    });
    return result;
  }
  
  
}

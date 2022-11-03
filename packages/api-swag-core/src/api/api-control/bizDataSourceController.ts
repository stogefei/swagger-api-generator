/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizDataSourceVo, ResBodyBizDataSourceVo, ResBodyListBizDataSourceVo, ResBodyVoid,
} from '../model';

/**
 * biz-data-source-controller
 */
export class BizDataSourceController {
  
  /**
   * 修改数据源
   * @param bizDataSourceVo - BizDataSourceVo - body - bizDataSourceVo - 必填
   */
   async update (bizDataSourceVo: BizDataSourceVo) {
    const result:AxiosResponse<ResBodyBizDataSourceVo> = await API.Global.request({
      url: '/admin/bizbus/datasource/update',
      method: 'post',
      data: bizDataSourceVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除数据源
   * @param codes - Array<string> - body - codes - 必填
   */
   async remove (codes: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/bizbus/datasource/remove',
      method: 'post',
      data: codes,
    });
    return result;
  }
  
  
  
  /**
   * 根据关键字获取数据源列表
   * @param keyword - string - query - 关键字 - 可空
   */
   async getList (keyword?: string) {
    const result:AxiosResponse<ResBodyListBizDataSourceVo> = await API.Global.request({
      url: '/admin/bizbus/datasource/getList',
      method: 'get',
      params: { keyword },
    });
    return result;
  }
  
  
  
  /**
   * 新建数据源
   * @param bizDataSourceVo - BizDataSourceVo - body - bizDataSourceVo - 必填
   */
   async create (bizDataSourceVo: BizDataSourceVo) {
    const result:AxiosResponse<ResBodyBizDataSourceVo> = await API.Global.request({
      url: '/admin/bizbus/datasource/create',
      method: 'post',
      data: bizDataSourceVo,
    });
    return result;
  }
  
  
}

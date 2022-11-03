/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    AdvancedDataSourceVo, ResBodyAdvancedDataSourceVo, IDVo, ResBodyVoid, ResBodyListAdvancedDataSourceVo, ResBodyobject,
} from '../model';

/**
 * advanced-data-source-controller
 */
export class AdvancedDataSourceController {
  
  /**
   * 修改数据源
   * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
   */
   async update (advancedDataSourceVo: AdvancedDataSourceVo) {
    const result:AxiosResponse<ResBodyAdvancedDataSourceVo> = await API.Global.request({
      url: '/admin/report/advanced/ds/update',
      method: 'post',
      data: advancedDataSourceVo,
    });
    return result;
  }
  
  
  
  /**
   * 测试运行
   * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
   */
   async testRun (advancedDataSourceVo: AdvancedDataSourceVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/admin/report/advanced/ds/testRun',
      method: 'post',
      data: advancedDataSourceVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取数据源列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListAdvancedDataSourceVo> = await API.Global.request({
      url: '/admin/report/advanced/ds/list',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 获取数据源详情
   * @param id - string - query - 数据源id - 必填
   */
   async get (id: string) {
    const result:AxiosResponse<ResBodyAdvancedDataSourceVo> = await API.Global.request({
      url: '/admin/report/advanced/ds/get',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 删除数据源
   * @param idVo - IDVo - body - idVo - 必填
   */
   async delete (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/report/advanced/ds/delete',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 创建数据源
   * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
   */
   async create (advancedDataSourceVo: AdvancedDataSourceVo) {
    const result:AxiosResponse<ResBodyAdvancedDataSourceVo> = await API.Global.request({
      url: '/admin/report/advanced/ds/create',
      method: 'post',
      data: advancedDataSourceVo,
    });
    return result;
  }
  
  
}

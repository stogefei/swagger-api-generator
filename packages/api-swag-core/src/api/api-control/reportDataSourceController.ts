/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyDataSourceListVo, DataSourceVo, ResBodyListBizPropertyVo,
} from '../model';

/**
 * report-data-source-controller
 */
export class ReportDataSourceController {
  
  /**
   * 获取数据源字段列表
   * @param dataSourceVo - DataSourceVo - body - dataSourceVo - 必填
   */
   async propertys (dataSourceVo: DataSourceVo) {
    const result:AxiosResponse<ResBodyListBizPropertyVo> = await API.Global.request({
      url: '/admin/report/ds/propertys',
      method: 'post',
      data: dataSourceVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取数据源列表
   */
   async list () {
    const result:AxiosResponse<ResBodyDataSourceListVo> = await API.Global.request({
      url: '/admin/report/ds/list',
      method: 'get',
    });
    return result;
  }
  
  
}

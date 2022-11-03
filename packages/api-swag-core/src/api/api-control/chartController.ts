/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ChartVo, ResBodyChartVo, ResBodyVoid,
} from '../model';

/**
 * chart-controller
 */
export class ChartController {
  
  /**
   * test
   */
   async test () {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/report/chart/test',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 编辑图表
   * @param chartVo - ChartVo - body - chartVo - 必填
   */
   async modify (chartVo: ChartVo) {
    const result:AxiosResponse<ResBodyChartVo> = await API.Global.request({
      url: '/admin/report/chart/modify',
      method: 'post',
      data: chartVo,
    });
    return result;
  }
  
  
  
  /**
   * 创建图表
   * @param chartVo - ChartVo - body - chartVo - 必填
   */
   async create (chartVo: ChartVo) {
    const result:AxiosResponse<ResBodyChartVo> = await API.Global.request({
      url: '/admin/report/chart/create',
      method: 'post',
      data: chartVo,
    });
    return result;
  }
  
  
}

/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    OlapQueryVo, ResBodyobject,
} from '../model';

/**
 * olap-controller
 */
export class OlapController {
  
  /**
   * 查询数据
   * @param olapQueryVo - OlapQueryVo - body - olapQueryVo - 必填
   */
   async query (olapQueryVo: OlapQueryVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/admin/report/olap/query',
      method: 'post',
      data: olapQueryVo,
    });
    return result;
  }
  
  
}

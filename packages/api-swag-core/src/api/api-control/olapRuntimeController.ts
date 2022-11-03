/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    OlapQueryVo, ResBodyobject,
} from '../model';

/**
 * olap-runtime-controller
 */
export class OlapRuntimeController {
  
  /**
   * 查询数据
   * @param olapQueryVo - OlapQueryVo - body - olapQueryVo - 必填
   */
   async query (olapQueryVo: OlapQueryVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/portal/report/olap/query',
      method: 'post',
      data: olapQueryVo,
    });
    return result;
  }
  
  
}

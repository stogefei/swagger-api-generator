/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodySysApiLogVo, SysLogSearchVo, ResBodyPageVOSysApiLogVo,
} from '../model';

/**
 * sys-log-controller
 */
export class SysLogController {
  
  /**
   * 查询日志列表
   * @param sysLogSearchVo - SysLogSearchVo - body - sysLogSearchVo - 必填
   */
   async list (sysLogSearchVo: SysLogSearchVo) {
    const result:AxiosResponse<ResBodyPageVOSysApiLogVo> = await API.Global.request({
      url: '/admin/system/log/list',
      method: 'post',
      data: sysLogSearchVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询日志详情
   * @param id - string - query - 日志id - 必填
   */
   async info (id: string) {
    const result:AxiosResponse<ResBodySysApiLogVo> = await API.Global.request({
      url: '/admin/system/log/info',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
}

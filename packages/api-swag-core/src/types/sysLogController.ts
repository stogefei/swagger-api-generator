/* eslint-disable */
import {
  ResBodySysApiLogVo, SysLogSearchVo, ResBodyPageVOSysApiLogVo,
} from '../api/model';

/**
 * sys-log-controller
 */
export interface SysLogController {

  /**
   * 查询日志列表
   * @param sysLogSearchVo - SysLogSearchVo - body - sysLogSearchVo - 必填
   */
  list (sysLogSearchVo: SysLogSearchVo): Promise<ResBodyPageVOSysApiLogVo>;

  /**
   * 查询日志详情
   * @param id - string - query - 日志id - 必填
   */
  info (id: string): Promise<ResBodySysApiLogVo>;
}

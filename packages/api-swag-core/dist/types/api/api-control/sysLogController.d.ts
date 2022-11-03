import { AxiosResponse } from 'axios';
import { ResBodySysApiLogVo, SysLogSearchVo, ResBodyPageVOSysApiLogVo } from '../model';
/**
 * sys-log-controller
 */
export declare class SysLogController {
    /**
     * 查询日志列表
     * @param sysLogSearchVo - SysLogSearchVo - body - sysLogSearchVo - 必填
     */
    list(sysLogSearchVo: SysLogSearchVo): Promise<AxiosResponse<ResBodyPageVOSysApiLogVo, any>>;
    /**
     * 查询日志详情
     * @param id - string - query - 日志id - 必填
     */
    info(id: string): Promise<AxiosResponse<ResBodySysApiLogVo, any>>;
}

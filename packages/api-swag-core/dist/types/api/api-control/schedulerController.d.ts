import { AxiosResponse } from 'axios';
import { SysJobVo, ResBodySysJobVo, SearchJobVo, ResBodyPageVOSysJobVo, SchedulerConfVo, ResBodyListstring, IDVo, ResBodyVoid } from '../model';
/**
 * scheduler-controller
 */
export declare class SchedulerController {
    /**
     * 修改任务
     * @param sysJobVo - SysJobVo - body - sysJobVo - 必填
     */
    update(sysJobVo: SysJobVo): Promise<AxiosResponse<ResBodySysJobVo, any>>;
    /**
     * 触发一次执行
     * @param idVo - IDVo - body - idVo - 必填
     */
    trigger(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 停止任务
     * @param idVo - IDVo - body - idVo - 必填
     */
    stop(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 启动任务
     * @param idVo - IDVo - body - idVo - 必填
     */
    start(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除任务
     * @param idVo - IDVo - body - idVo - 必填
     */
    remove(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取下一次执行时间
     * @param schedulerConfVo - SchedulerConfVo - body - schedulerConfVo - 必填
     */
    nextTriggerTime(schedulerConfVo: SchedulerConfVo): Promise<AxiosResponse<ResBodyListstring, any>>;
    /**
     * 获取任务列表
     * @param searchJobVo - SearchJobVo - body - searchJobVo - 必填
     */
    list(searchJobVo: SearchJobVo): Promise<AxiosResponse<ResBodyPageVOSysJobVo, any>>;
    /**
     * 获取任务详情
     * @param jobId - string - query - 任务id - 必填
     */
    getInfo(jobId: string): Promise<AxiosResponse<ResBodySysJobVo, any>>;
    /**
     * 新建任务
     * @param sysJobVo - SysJobVo - body - sysJobVo - 必填
     */
    add(sysJobVo: SysJobVo): Promise<AxiosResponse<ResBodySysJobVo, any>>;
}

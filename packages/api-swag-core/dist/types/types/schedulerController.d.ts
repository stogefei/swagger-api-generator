import { SysJobVo, ResBodySysJobVo, SearchJobVo, ResBodyPageVOSysJobVo, SchedulerConfVo, ResBodyListstring, IDVo, ResBodyVoid } from '../api/model';
/**
 * scheduler-controller
 */
export interface SchedulerController {
    /**
     * 修改任务
     * @param sysJobVo - SysJobVo - body - sysJobVo - 必填
     */
    update(sysJobVo: SysJobVo): Promise<ResBodySysJobVo>;
    /**
     * 触发一次执行
     * @param idVo - IDVo - body - idVo - 必填
     */
    trigger(idVo: IDVo): Promise<ResBodyVoid>;
    /**
     * 停止任务
     * @param idVo - IDVo - body - idVo - 必填
     */
    stop(idVo: IDVo): Promise<ResBodyVoid>;
    /**
     * 启动任务
     * @param idVo - IDVo - body - idVo - 必填
     */
    start(idVo: IDVo): Promise<ResBodyVoid>;
    /**
     * 删除任务
     * @param idVo - IDVo - body - idVo - 必填
     */
    remove(idVo: IDVo): Promise<ResBodyVoid>;
    /**
     * 获取下一次执行时间
     * @param schedulerConfVo - SchedulerConfVo - body - schedulerConfVo - 必填
     */
    nextTriggerTime(schedulerConfVo: SchedulerConfVo): Promise<ResBodyListstring>;
    /**
     * 获取任务列表
     * @param searchJobVo - SearchJobVo - body - searchJobVo - 必填
     */
    list(searchJobVo: SearchJobVo): Promise<ResBodyPageVOSysJobVo>;
    /**
     * 获取任务详情
     * @param jobId - string - query - 任务id - 必填
     */
    getInfo(jobId: string): Promise<ResBodySysJobVo>;
    /**
     * 新建任务
     * @param sysJobVo - SysJobVo - body - sysJobVo - 必填
     */
    add(sysJobVo: SysJobVo): Promise<ResBodySysJobVo>;
}

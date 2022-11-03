/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    SysJobVo, ResBodySysJobVo, SearchJobVo, ResBodyPageVOSysJobVo, SchedulerConfVo, ResBodyListstring, IDVo, ResBodyVoid,
} from '../model';

/**
 * scheduler-controller
 */
export class SchedulerController {
  
  /**
   * 修改任务
   * @param sysJobVo - SysJobVo - body - sysJobVo - 必填
   */
   async update (sysJobVo: SysJobVo) {
    const result:AxiosResponse<ResBodySysJobVo> = await API.Global.request({
      url: '/admin/scheduler/update',
      method: 'post',
      data: sysJobVo,
    });
    return result;
  }
  
  
  
  /**
   * 触发一次执行
   * @param idVo - IDVo - body - idVo - 必填
   */
   async trigger (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/scheduler/trigger',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 停止任务
   * @param idVo - IDVo - body - idVo - 必填
   */
   async stop (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/scheduler/stop',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 启动任务
   * @param idVo - IDVo - body - idVo - 必填
   */
   async start (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/scheduler/start',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除任务
   * @param idVo - IDVo - body - idVo - 必填
   */
   async remove (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/scheduler/remove',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取下一次执行时间
   * @param schedulerConfVo - SchedulerConfVo - body - schedulerConfVo - 必填
   */
   async nextTriggerTime (schedulerConfVo: SchedulerConfVo) {
    const result:AxiosResponse<ResBodyListstring> = await API.Global.request({
      url: '/admin/scheduler/nextTriggerTime',
      method: 'post',
      data: schedulerConfVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取任务列表
   * @param searchJobVo - SearchJobVo - body - searchJobVo - 必填
   */
   async list (searchJobVo: SearchJobVo) {
    const result:AxiosResponse<ResBodyPageVOSysJobVo> = await API.Global.request({
      url: '/admin/scheduler/list',
      method: 'post',
      data: searchJobVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取任务详情
   * @param jobId - string - query - 任务id - 必填
   */
   async getInfo (jobId: string) {
    const result:AxiosResponse<ResBodySysJobVo> = await API.Global.request({
      url: '/admin/scheduler/getInfo',
      method: 'get',
      params: { jobId },
    });
    return result;
  }
  
  
  
  /**
   * 新建任务
   * @param sysJobVo - SysJobVo - body - sysJobVo - 必填
   */
   async add (sysJobVo: SysJobVo) {
    const result:AxiosResponse<ResBodySysJobVo> = await API.Global.request({
      url: '/admin/scheduler/add',
      method: 'post',
      data: sysJobVo,
    });
    return result;
  }
  
  
}

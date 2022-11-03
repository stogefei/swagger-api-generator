/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    DashboardVo, ResBodyDashboardVo, CodeVo, ResBodyVoid, MoveChartVo, IDVo, UpdateDashboardConfigVo,
} from '../model';

/**
 * dashboard-controller
 */
export class DashboardController {
  
  /**
   * 保存全局配置
   * @param dashboardConfigVo - UpdateDashboardConfigVo - body - dashboardConfigVo - 必填
   */
   async saveGlobal (dashboardConfigVo: UpdateDashboardConfigVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/report/dashboard/saveGlobal',
      method: 'post',
      data: dashboardConfigVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存全局过滤
   * @param dashboardConfigVo - UpdateDashboardConfigVo - body - dashboardConfigVo - 必填
   */
   async saveFilters (dashboardConfigVo: UpdateDashboardConfigVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/report/dashboard/saveFilters',
      method: 'post',
      data: dashboardConfigVo,
    });
    return result;
  }
  
  
  
  /**
   * 发布仪表盘
   * @param idVo - IDVo - body - idVo - 必填
   */
   async publish (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/report/dashboard/publish',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 移动图表
   * @param moveChartVo - MoveChartVo - body - moveChartVo - 必填
   */
   async moveChart (moveChartVo: MoveChartVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/report/dashboard/moveChart',
      method: 'post',
      data: moveChartVo,
    });
    return result;
  }
  
  
  
  /**
   * 修改仪表盘
   * @param dashboardVo - DashboardVo - body - dashboardVo - 必填
   */
   async modify (dashboardVo: DashboardVo) {
    const result:AxiosResponse<ResBodyDashboardVo> = await API.Global.request({
      url: '/admin/report/dashboard/modify',
      method: 'post',
      data: dashboardVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取仪表盘
   * @param code - string - query - 仪表盘编码 - 必填
   */
   async get (code: string) {
    const result:AxiosResponse<ResBodyDashboardVo> = await API.Global.request({
      url: '/admin/report/dashboard/get',
      method: 'get',
      params: { code },
    });
    return result;
  }
  
  
  
  /**
   * 删除仪表盘
   * @param codeVo - CodeVo - body - codeVo - 必填
   */
   async delete (codeVo: CodeVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/report/dashboard/delete',
      method: 'post',
      data: codeVo,
    });
    return result;
  }
  
  
  
  /**
   * 创建仪表盘
   * @param dashboardVo - DashboardVo - body - dashboardVo - 必填
   */
   async create (dashboardVo: DashboardVo) {
    const result:AxiosResponse<ResBodyDashboardVo> = await API.Global.request({
      url: '/admin/report/dashboard/create',
      method: 'post',
      data: dashboardVo,
    });
    return result;
  }
  
  
}

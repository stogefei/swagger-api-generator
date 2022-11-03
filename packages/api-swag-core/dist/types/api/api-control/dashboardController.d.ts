import { AxiosResponse } from 'axios';
import { DashboardVo, ResBodyDashboardVo, CodeVo, ResBodyVoid, MoveChartVo, IDVo, UpdateDashboardConfigVo } from '../model';
/**
 * dashboard-controller
 */
export declare class DashboardController {
    /**
     * 保存全局配置
     * @param dashboardConfigVo - UpdateDashboardConfigVo - body - dashboardConfigVo - 必填
     */
    saveGlobal(dashboardConfigVo: UpdateDashboardConfigVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 保存全局过滤
     * @param dashboardConfigVo - UpdateDashboardConfigVo - body - dashboardConfigVo - 必填
     */
    saveFilters(dashboardConfigVo: UpdateDashboardConfigVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 发布仪表盘
     * @param idVo - IDVo - body - idVo - 必填
     */
    publish(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 移动图表
     * @param moveChartVo - MoveChartVo - body - moveChartVo - 必填
     */
    moveChart(moveChartVo: MoveChartVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 修改仪表盘
     * @param dashboardVo - DashboardVo - body - dashboardVo - 必填
     */
    modify(dashboardVo: DashboardVo): Promise<AxiosResponse<ResBodyDashboardVo, any>>;
    /**
     * 获取仪表盘
     * @param code - string - query - 仪表盘编码 - 必填
     */
    get(code: string): Promise<AxiosResponse<ResBodyDashboardVo, any>>;
    /**
     * 删除仪表盘
     * @param codeVo - CodeVo - body - codeVo - 必填
     */
    delete(codeVo: CodeVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 创建仪表盘
     * @param dashboardVo - DashboardVo - body - dashboardVo - 必填
     */
    create(dashboardVo: DashboardVo): Promise<AxiosResponse<ResBodyDashboardVo, any>>;
}

import { DashboardVo, ResBodyDashboardVo, CodeVo, ResBodyVoid, MoveChartVo, IDVo, UpdateDashboardConfigVo } from '../api/model';
/**
 * dashboard-controller
 */
export interface DashboardController {
    /**
     * 保存全局配置
     * @param dashboardConfigVo - UpdateDashboardConfigVo - body - dashboardConfigVo - 必填
     */
    saveGlobal(dashboardConfigVo: UpdateDashboardConfigVo): Promise<ResBodyVoid>;
    /**
     * 保存全局过滤
     * @param dashboardConfigVo - UpdateDashboardConfigVo - body - dashboardConfigVo - 必填
     */
    saveFilters(dashboardConfigVo: UpdateDashboardConfigVo): Promise<ResBodyVoid>;
    /**
     * 发布仪表盘
     * @param idVo - IDVo - body - idVo - 必填
     */
    publish(idVo: IDVo): Promise<ResBodyVoid>;
    /**
     * 移动图表
     * @param moveChartVo - MoveChartVo - body - moveChartVo - 必填
     */
    moveChart(moveChartVo: MoveChartVo): Promise<ResBodyVoid>;
    /**
     * 修改仪表盘
     * @param dashboardVo - DashboardVo - body - dashboardVo - 必填
     */
    modify(dashboardVo: DashboardVo): Promise<ResBodyDashboardVo>;
    /**
     * 获取仪表盘
     * @param code - string - query - 仪表盘编码 - 必填
     */
    get(code: string): Promise<ResBodyDashboardVo>;
    /**
     * 删除仪表盘
     * @param codeVo - CodeVo - body - codeVo - 必填
     */
    delete(codeVo: CodeVo): Promise<ResBodyVoid>;
    /**
     * 创建仪表盘
     * @param dashboardVo - DashboardVo - body - dashboardVo - 必填
     */
    create(dashboardVo: DashboardVo): Promise<ResBodyDashboardVo>;
}

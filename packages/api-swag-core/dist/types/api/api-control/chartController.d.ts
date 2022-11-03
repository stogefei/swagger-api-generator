import { AxiosResponse } from 'axios';
import { ChartVo, ResBodyChartVo, ResBodyVoid } from '../model';
/**
 * chart-controller
 */
export declare class ChartController {
    /**
     * test
     */
    test(): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 编辑图表
     * @param chartVo - ChartVo - body - chartVo - 必填
     */
    modify(chartVo: ChartVo): Promise<AxiosResponse<ResBodyChartVo, any>>;
    /**
     * 创建图表
     * @param chartVo - ChartVo - body - chartVo - 必填
     */
    create(chartVo: ChartVo): Promise<AxiosResponse<ResBodyChartVo, any>>;
}

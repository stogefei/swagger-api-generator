/* eslint-disable */
import {
  ChartVo, ResBodyChartVo, ResBodyVoid,
} from '../api/model';

/**
 * chart-controller
 */
export interface ChartController {

  /**
   * test
   */
  test (): Promise<ResBodyVoid>;

  /**
   * 编辑图表
   * @param chartVo - ChartVo - body - chartVo - 必填
   */
  modify (chartVo: ChartVo): Promise<ResBodyChartVo>;

  /**
   * 创建图表
   * @param chartVo - ChartVo - body - chartVo - 必填
   */
  create (chartVo: ChartVo): Promise<ResBodyChartVo>;
}

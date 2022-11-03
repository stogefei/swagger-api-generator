/* eslint-disable */
import {
  ResBodyFigureVo,
} from '../api/model';

/**
 * workbench-controller
 */
export interface WorkbenchController {

  /**
   * 获取红数字
   */
  getFigure (): Promise<ResBodyFigureVo>;
}

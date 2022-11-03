import { AxiosResponse } from 'axios';
import { ResBodyFigureVo } from '../model';
/**
 * workbench-controller
 */
export declare class WorkbenchController {
    /**
     * 获取红数字
     */
    getFigure(): Promise<AxiosResponse<ResBodyFigureVo, any>>;
}

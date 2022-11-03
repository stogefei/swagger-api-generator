/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyFigureVo,
} from '../model';

/**
 * workbench-controller
 */
export class WorkbenchController {
  
  /**
   * 获取红数字
   */
   async getFigure () {
    const result:AxiosResponse<ResBodyFigureVo> = await API.Global.request({
      url: '/portal/workbench/getFigure',
      method: 'get',
    });
    return result;
  }
  
  
}

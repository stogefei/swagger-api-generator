/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyListFunTreeVo,
} from '../model';

/**
 * portal-model-fun-tree-controller
 */
export class PortalModelFunTreeController {
  
  /**
   * 获取应用模型功能树
   * @param funType - string - query - 功能类型：APP：应用， MODEL：模型，流程：WORKFLOW - 可空
   */
   async tree (funType?: string) {
    const result:AxiosResponse<ResBodyListFunTreeVo> = await API.Global.request({
      url: '/portal/model/fun/tree',
      method: 'get',
      params: { funType },
    });
    return result;
  }
  
  
}

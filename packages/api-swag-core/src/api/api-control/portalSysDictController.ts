/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyListSystemDictConfigVo,
} from '../model';

/**
 * portal-sys-dict-controller
 */
export class PortalSysDictController {
  
  /**
   * 查询字典数据项列表
   * @param dictId - string - query - 字典id - 必填
   * @param status - boolean - query - 状态 - 可空
   */
   async listByDictId (dictId: string, status?: boolean) {
    const result:AxiosResponse<ResBodyListSystemDictConfigVo> = await API.Global.request({
      url: '/portal/system/dict/config/listByDictId',
      method: 'get',
      params: { dictId, status },
    });
    return result;
  }
  
  
}

/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    SystemDictVo, ResBodyVoid, ResBodyListSystemDictConfigVo, ResBodySystemDictVo, SystemDictQueryVo, ResBodyPageVOSystemDictVo,
} from '../model';

/**
 * sys-dict-controller
 */
export class SysDictController {
  
  /**
   * 数据字典修改
   * @param systemDictVo - SystemDictVo - body - systemDictVo - 必填
   */
   async update (systemDictVo: SystemDictVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/system/dict/update',
      method: 'post',
      data: systemDictVo,
    });
    return result;
  }
  
  
  
  /**
   * 分页查询数据字典列表
   * @param systemDictQueryVo - SystemDictQueryVo - body - systemDictQueryVo - 必填
   */
   async page (systemDictQueryVo: SystemDictQueryVo) {
    const result:AxiosResponse<ResBodyPageVOSystemDictVo> = await API.Global.request({
      url: '/admin/system/dict/page',
      method: 'post',
      data: systemDictQueryVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询字典数据项列表
   * @param dictId - string - query - 字典id - 必填
   * @param status - boolean - query - 状态 - 可空
   */
   async listByDictId (dictId: string, status?: boolean) {
    const result:AxiosResponse<ResBodyListSystemDictConfigVo> = await API.Global.request({
      url: '/admin/system/dict/config/listByDictId',
      method: 'get',
      params: { dictId, status },
    });
    return result;
  }
  
  
  
  /**
   * 查询字典详情
   * @param id - string - query - 字典id - 必填
   */
   async get (id: string) {
    const result:AxiosResponse<ResBodySystemDictVo> = await API.Global.request({
      url: '/admin/system/dict/get',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 修改字典状态
   * @param id - string - query - id - 必填
   * @param status - boolean - query - 状态 - 必填
   */
   async changeStatus (id: string, status: boolean) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/system/dict/changeStatus',
      method: 'get',
      params: { id, status },
    });
    return result;
  }
  
  
  
  /**
   * 新增字典
   * @param systemDictVo - SystemDictVo - body - systemDictVo - 必填
   */
   async add (systemDictVo: SystemDictVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/system/dict/add',
      method: 'post',
      data: systemDictVo,
    });
    return result;
  }
  
  
}

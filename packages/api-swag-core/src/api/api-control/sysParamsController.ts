/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    SystemParamsSettingVo, ResBodyVoid,
} from '../model';

/**
 * sys-params-controller
 */
export class SysParamsController {
  
  /**
   * 添加短信模板
   * @param systemParamsSettingVo - SystemParamsSettingVo - body - systemParamsSettingVo - 必填
   */
   async create (systemParamsSettingVo: SystemParamsSettingVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/system/params/sms/template/create',
      method: 'get',
      data: systemParamsSettingVo,
    });
    return result;
  }
  
  
}

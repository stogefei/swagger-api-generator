/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyLicenseInfoVo, ResBodyLicenseCheckModel,
} from '../model';

/**
 * license-controller
 */
export class LicenseController {
  
  /**
   * 获取服务器硬件信息
   * @param osName - string - query - osName - 可空
   */
   async serverInfo (osName?: string) {
    const result:AxiosResponse<ResBodyLicenseCheckModel> = await API.Global.request({
      url: '/admin/license/serverInfo',
      method: 'get',
      params: { osName },
    });
    return result;
  }
  
  
  
  /**
   * 获取license信息
   */
   async info () {
    const result:AxiosResponse<ResBodyLicenseInfoVo> = await API.Global.request({
      url: '/admin/license/info',
      method: 'get',
    });
    return result;
  }
  
  
}

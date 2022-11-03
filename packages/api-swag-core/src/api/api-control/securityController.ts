/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyGenKeyResultVo,
} from '../model';

/**
 * security-controller
 */
export class SecurityController {
  
  /**
   * 获取加密公钥
   */
   async genRsaKey () {
    const result:AxiosResponse<ResBodyGenKeyResultVo> = await API.Global.request({
      url: '/system/sys/security/genRsaKey',
      method: 'get',
    });
    return result;
  }
  
  
}

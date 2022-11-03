/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyListstring,
} from '../model';

/**
 * id-generator-controller
 */
export class IdGeneratorController {
  
  /**
   * 生成id
   */
   async generateIds () {
    const result:AxiosResponse<ResBodyListstring> = await API.Global.request({
      url: '/system/sys/idGenerator/generateIds',
      method: 'get',
    });
    return result;
  }
  
  
}

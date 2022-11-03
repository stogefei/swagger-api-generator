/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyFormDataVo, ExternalSubmitVo, ResBodystring,
} from '../model';

/**
 * external-controller
 */
export class ExternalController {
  
  /**
   * 提交表单
   * @param externalSubmitVo - ExternalSubmitVo - body - externalSubmitVo - 必填
   */
   async submit (externalSubmitVo: ExternalSubmitVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/portal/runtime/external/submit',
      method: 'post',
      data: externalSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 发起流程
   * @param externalSubmitVo - ExternalSubmitVo - body - externalSubmitVo - 必填
   */
   async startWorkflow (externalSubmitVo: ExternalSubmitVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/portal/runtime/external/startWorkflow',
      method: 'post',
      data: externalSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 加载表单
   * @param shortCode - string - query - 外链短码 - 必填
   */
   async load (shortCode: string) {
    const result:AxiosResponse<ResBodyFormDataVo> = await API.Global.request({
      url: '/portal/runtime/external/load',
      method: 'get',
      params: { shortCode },
    });
    return result;
  }
  
  
}

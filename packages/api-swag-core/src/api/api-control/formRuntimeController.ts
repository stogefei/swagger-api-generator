/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    CalculateVo, ResBodyListCalculateResultVo, LoadFormDataParamVo, ResBodyFormDataVo, ResBodyWorkflowFormDataVo, LoadFormSheetDataParamVo, ResBodyListMapstringobject, LoadWorkflowFormDataParamVo, FormRemindVo, ResBodyFormRemindVo, ResBodyViewCorrelationFormVo,
} from '../model';

/**
 * form-runtime-controller
 */
export class FormRuntimeController {
  
  /**
   * 预览关联表单
   * @param bizObjectId - string - query - 业务对象数据id - 必填
   * @param schemaCode - string - query - 模型编码 - 必填
   * @param viewCode - string - query - 视图编码 - 必填
   */
   async viewCorrelationForm (bizObjectId: string, schemaCode: string, viewCode: string) {
    const result:AxiosResponse<ResBodyViewCorrelationFormVo> = await API.Global.request({
      url: '/portal/runtime/form/viewCorrelationForm',
      method: 'get',
      params: { bizObjectId, schemaCode, viewCode },
    });
    return result;
  }
  
  
  
  /**
   * 表单提醒设置
   * @param formRemindVo - FormRemindVo - body - formRemindVo - 必填
   */
   async remind (formRemindVo: FormRemindVo) {
    const result:AxiosResponse<ResBodyFormRemindVo> = await API.Global.request({
      url: '/portal/runtime/form/remind',
      method: 'post',
      data: formRemindVo,
    });
    return result;
  }
  
  
  
  /**
   * 加载流程表单数据
   * @param loadWorkflowFormDataParamVo - LoadWorkflowFormDataParamVo - body - loadWorkflowFormDataParamVo - 必填
   */
   async loadWorkflowData (loadWorkflowFormDataParamVo: LoadWorkflowFormDataParamVo) {
    const result:AxiosResponse<ResBodyWorkflowFormDataVo> = await API.Global.request({
      url: '/portal/runtime/form/loadWorkflowData',
      method: 'post',
      data: loadWorkflowFormDataParamVo,
    });
    return result;
  }
  
  
  
  /**
   * 加载表单子表数据
   * @param loadFormSheetDataParamVo - LoadFormSheetDataParamVo - body - loadFormSheetDataParamVo - 必填
   */
   async loadSheetDatas (loadFormSheetDataParamVo: LoadFormSheetDataParamVo) {
    const result:AxiosResponse<ResBodyListMapstringobject> = await API.Global.request({
      url: '/portal/runtime/form/loadSheetDatas',
      method: 'post',
      data: loadFormSheetDataParamVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据表单评论加载表单数据
   * @param commentId - string - query - commentId - 必填
   */
   async loadDataByCommentId (commentId: string) {
    const result:AxiosResponse<ResBodyWorkflowFormDataVo> = await API.Global.request({
      url: '/portal/runtime/form/loadDataByCommentId',
      method: 'get',
      params: { commentId },
    });
    return result;
  }
  
  
  
  /**
   * 加载业务表单数据
   * @param loadFormDataParamVo - LoadFormDataParamVo - body - loadFormDataParamVo - 必填
   */
   async loadBizData (loadFormDataParamVo: LoadFormDataParamVo) {
    const result:AxiosResponse<ResBodyFormDataVo> = await API.Global.request({
      url: '/portal/runtime/form/loadBizData',
      method: 'post',
      data: loadFormDataParamVo,
    });
    return result;
  }
  
  
  
  /**
   * 公式计算
   * @param calculateList - Array<CalculateVo> - body - calculateList - 必填
   */
   async calculate (calculateList: Array<CalculateVo>) {
    const result:AxiosResponse<ResBodyListCalculateResultVo> = await API.Global.request({
      url: '/portal/runtime/form/calculate',
      method: 'post',
      data: calculateList,
    });
    return result;
  }
  
  
}

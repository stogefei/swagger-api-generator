/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    CalculateVo, ResBodyListCalculateResultVo, BizObjectSubmitVo, ResBodyMapstringobject, BizViewDataQueryVo, ResBodyPageVOMapstringobject, LoadFormDataParamVo, ResBodyFormDataVo, LoadWorkflowFormDataParamVo, ResBodyWorkflowFormDataVo, BizObjectIdsVo, ResBodyVoid,
} from '../model';

/**
 * form-runtime-open-api
 */
export class FormRuntimeOpenApi {
  
  /**
   * 修改数据
   * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
   */
   async update (bizObjectSubmitVo: BizObjectSubmitVo) {
    const result:AxiosResponse<ResBodyMapstringobject> = await API.Global.request({
      url: '/openapi/runtime/form/update',
      method: 'post',
      data: bizObjectSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除数据
   * @param bizObjectIdsVo - BizObjectIdsVo - body - bizObjectIdsVo - 必填
   */
   async remove (bizObjectIdsVo: BizObjectIdsVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/openapi/runtime/form/remove',
      method: 'post',
      data: bizObjectIdsVo,
    });
    return result;
  }
  
  
  
  /**
   * 加载流程表单数据
   * @param loadWorkflowFormDataParamVo - LoadWorkflowFormDataParamVo - body - loadWorkflowFormDataParamVo - 必填
   */
   async loadWorkflowData (loadWorkflowFormDataParamVo: LoadWorkflowFormDataParamVo) {
    const result:AxiosResponse<ResBodyWorkflowFormDataVo> = await API.Global.request({
      url: '/openapi/runtime/form/loadWorkflowData',
      method: 'post',
      data: loadWorkflowFormDataParamVo,
    });
    return result;
  }
  
  
  
  /**
   * 加载业务表单数据
   * @param loadFormDataParamVo - LoadFormDataParamVo - body - loadFormDataParamVo - 必填
   */
   async loadBizData (loadFormDataParamVo: LoadFormDataParamVo) {
    const result:AxiosResponse<ResBodyFormDataVo> = await API.Global.request({
      url: '/openapi/runtime/form/loadBizData',
      method: 'post',
      data: loadFormDataParamVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询数据
   * @param bizViewDataQueryVo - BizViewDataQueryVo - body - bizViewDataQueryVo - 必填
   */
   async listData (bizViewDataQueryVo: BizViewDataQueryVo) {
    const result:AxiosResponse<ResBodyPageVOMapstringobject> = await API.Global.request({
      url: '/openapi/runtime/form/listData',
      method: 'post',
      data: bizViewDataQueryVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存数据
   * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
   */
   async insert (bizObjectSubmitVo: BizObjectSubmitVo) {
    const result:AxiosResponse<ResBodyMapstringobject> = await API.Global.request({
      url: '/openapi/runtime/form/insert',
      method: 'post',
      data: bizObjectSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 公式计算
   * @param calculateList - Array<CalculateVo> - body - calculateList - 必填
   */
   async calculate (calculateList: Array<CalculateVo>) {
    const result:AxiosResponse<ResBodyListCalculateResultVo> = await API.Global.request({
      url: '/openapi/runtime/form/calculate',
      method: 'post',
      data: calculateList,
    });
    return result;
  }
  
  
}

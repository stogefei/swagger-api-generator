/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyListBizFormTemplateVo, ResBodyBizFormTemplateVo,
} from '../model';

/**
 * portal-form-template-controller
 */
export class PortalFormTemplateController {
  
  /**
   * 获取模板详情
   * @param code - string - query - 模板编码 - 必填
   */
   async getByCode (code: string) {
    const result:AxiosResponse<ResBodyBizFormTemplateVo> = await API.Global.request({
      url: '/portal/form/template/getByCode',
      method: 'get',
      params: { code },
    });
    return result;
  }
  
  
  
  /**
   * 根据模型编码查询模板列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async findBySchemaCode (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizFormTemplateVo> = await API.Global.request({
      url: '/portal/form/template/findBySchemaCode',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
}

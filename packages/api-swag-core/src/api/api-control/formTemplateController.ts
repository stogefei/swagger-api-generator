/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizFormTemplateVo, ResBodyVoid, ResBodyListBizFormTemplateVo, ResBodyBizFormTemplateVo,
} from '../model';

/**
 * form-template-controller
 */
export class FormTemplateController {
  
  /**
   * 修改模板
   * @param bizFormTemplateVo - BizFormTemplateVo - body - bizFormTemplateVo - 必填
   */
   async update (bizFormTemplateVo: BizFormTemplateVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/form/template/update',
      method: 'post',
      data: bizFormTemplateVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取模板详情
   * @param code - string - query - 模板编码 - 必填
   */
   async getByCode (code: string) {
    const result:AxiosResponse<ResBodyBizFormTemplateVo> = await API.Global.request({
      url: '/admin/form/template/getByCode',
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
      url: '/admin/form/template/findBySchemaCode',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 模板删除
   * @param id - string - query - id - 必填
   */
   async delete (id: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/form/template/delete',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 新建模板
   * @param bizFormTemplateVo - BizFormTemplateVo - body - bizFormTemplateVo - 必填
   */
   async create (bizFormTemplateVo: BizFormTemplateVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/form/template/create',
      method: 'post',
      data: bizFormTemplateVo,
    });
    return result;
  }
  
  
}

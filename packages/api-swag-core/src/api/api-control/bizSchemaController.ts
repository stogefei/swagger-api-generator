/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizSchemaGroupVo, ResBodyBizSchemaGroupVo, BizSchemaVo, ResBodyBizSchemaVo, ResBodyListBizSchemaVo, ResBodyListBizSchemaGroupVo, ResBodyListFunTreeVo, SchemaGroupSortVo, ResBodyVoid, SchemaTitleVo, SchemaSortVo,
} from '../model';

/**
 * biz-schema-controller
 */
export class BizSchemaController {
  
  /**
   * 测试
   * @param param - string - formData - 参数 - 可空
   */
   async test (param?: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/test',
      method: 'post',
      data: param,
    });
    return result;
  }
  
  
  
  /**
   * 模型排序
   * @param schemaSortVo - SchemaSortVo - body - schemaSortVo - 必填
   */
   async sort (schemaSortVo: SchemaSortVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/sort',
      method: 'post',
      data: schemaSortVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存模型标题
   * @param schemaTitleVo - SchemaTitleVo - body - schemaTitleVo - 必填
   */
   async saveTitle (schemaTitleVo: SchemaTitleVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/saveTitle',
      method: 'post',
      data: schemaTitleVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除模型
   * @param codes - Array<string> - body - codes - 必填
   */
   async removeSchema (codes: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/removeSchema',
      method: 'post',
      data: codes,
    });
    return result;
  }
  
  
  
  /**
   * 删除模型分组
   * @param ids - Array<string> - body - ids - 必填
   */
   async removeGroup (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/removeGroup',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 发布模型
   * @param codes - Array<string> - body - codes - 必填
   */
   async publish (codes: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/publish',
      method: 'post',
      data: codes,
    });
    return result;
  }
  
  
  
  /**
   * 修改模型
   * @param bizSchemaVo - BizSchemaVo - body - bizSchemaVo - 必填
   */
   async modifySchema (bizSchemaVo: BizSchemaVo) {
    const result:AxiosResponse<ResBodyBizSchemaVo> = await API.Global.request({
      url: '/admin/model/schema/modifySchema',
      method: 'post',
      data: bizSchemaVo,
    });
    return result;
  }
  
  
  
  /**
   * 修改模型分组
   * @param bizSchemaGroupVo - BizSchemaGroupVo - body - bizSchemaGroupVo - 必填
   */
   async modifyGroup (bizSchemaGroupVo: BizSchemaGroupVo) {
    const result:AxiosResponse<ResBodyBizSchemaGroupVo> = await API.Global.request({
      url: '/admin/model/schema/modifyGroup',
      method: 'post',
      data: bizSchemaGroupVo,
    });
    return result;
  }
  
  
  
  /**
   * 模型分组排序
   * @param schemaGroupSortVo - SchemaGroupSortVo - body - schemaGroupSortVo - 必填
   */
   async groupSort (schemaGroupSortVo: SchemaGroupSortVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/groupSort',
      method: 'post',
      data: schemaGroupSortVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取模型元数据
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async getSchemaMetadata (schemaCode: string) {
    const result:AxiosResponse<ResBodyBizSchemaVo> = await API.Global.request({
      url: '/admin/model/schema/getSchemaMetadata',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取模型详情
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async getSchemaInfo (schemaCode: string) {
    const result:AxiosResponse<ResBodyBizSchemaVo> = await API.Global.request({
      url: '/admin/model/schema/getSchemaInfo',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取模型树
   * @param appCode - string - query - 应用编码 - 必填
   */
   async getModelTree (appCode: string) {
    const result:AxiosResponse<ResBodyListFunTreeVo> = await API.Global.request({
      url: '/admin/model/schema/getModelTree',
      method: 'get',
      params: { appCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取模型列表
   * @param appCode - string - query - 应用编码 - 必填
   */
   async getModelList (appCode: string) {
    const result:AxiosResponse<ResBodyListBizSchemaVo> = await API.Global.request({
      url: '/admin/model/schema/getModelList',
      method: 'get',
      params: { appCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取模型分组列表
   * @param appCode - string - query - 应用编码 - 必填
   */
   async getGroupTree (appCode: string) {
    const result:AxiosResponse<ResBodyListBizSchemaGroupVo> = await API.Global.request({
      url: '/admin/model/schema/getGroupTree',
      method: 'get',
      params: { appCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取使用关联表单关联了指定模型的模型
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async getCorrlationFormSchema (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizSchemaVo> = await API.Global.request({
      url: '/admin/model/schema/getCorrlationFormSchema',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 创建模型
   * @param bizSchemaVo - BizSchemaVo - body - bizSchemaVo - 必填
   */
   async createSchema (bizSchemaVo: BizSchemaVo) {
    const result:AxiosResponse<ResBodyBizSchemaVo> = await API.Global.request({
      url: '/admin/model/schema/createSchema',
      method: 'post',
      data: bizSchemaVo,
    });
    return result;
  }
  
  
  
  /**
   * 创建模型分组
   * @param bizSchemaGroupVo - BizSchemaGroupVo - body - bizSchemaGroupVo - 必填
   */
   async createGroup (bizSchemaGroupVo: BizSchemaGroupVo) {
    const result:AxiosResponse<ResBodyBizSchemaGroupVo> = await API.Global.request({
      url: '/admin/model/schema/createGroup',
      method: 'post',
      data: bizSchemaGroupVo,
    });
    return result;
  }
  
  
}

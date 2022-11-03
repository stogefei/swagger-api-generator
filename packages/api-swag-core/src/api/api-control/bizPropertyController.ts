/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyMapstringListBizPropertyVo, SchemaPropertyCodeVo, ResBodyVoid, BizPropertyVo, ResBodyBizPropertyVo, ResBodyListBizPropertyVo, ResBodyRemovePropertyVo, BizPropertySortVo,
} from '../model';

/**
 * biz-property-controller
 */
export class BizPropertyController {
  
  /**
   * 数据项排序
   * @param bizPropertySortVo - BizPropertySortVo - body - bizPropertySortVo - 必填
   */
   async sort (bizPropertySortVo: BizPropertySortVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/property/sort',
      method: 'post',
      data: bizPropertySortVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除数据项
   * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
   */
   async remove (schemaPropertyCodeVo: SchemaPropertyCodeVo) {
    const result:AxiosResponse<ResBodyRemovePropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/remove',
      method: 'post',
      data: schemaPropertyCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 修改数据项
   * @param bizPropertyVo - BizPropertyVo - body - bizPropertyVo - 必填
   */
   async modify (bizPropertyVo: BizPropertyVo) {
    const result:AxiosResponse<ResBodyBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/modify',
      method: 'post',
      data: bizPropertyVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取数据项列表
   * @param schemaCode - string - query - 模型编码 - 必填
   * @param loadSheetSysProperty - boolean - query - 是否加载子表系统字段 - 可空
   * @param sortType - string - query - 排序 - 可空
   */
   async list (schemaCode: string, loadSheetSysProperty?: boolean, sortType?: string) {
    const result:AxiosResponse<ResBodyListBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/list',
      method: 'get',
      params: { loadSheetSysProperty, schemaCode, sortType },
    });
    return result;
  }
  
  
  
  /**
   * 根据流程编码获取已发布的数据项列表
   * @param workflowCode - string - query - 流程编码 - 必填
   * @param loadSheetSysProperty - boolean - query - 模型编码 - 可空
   */
   async getPublishListByWorkflowCode (workflowCode: string, loadSheetSysProperty?: boolean) {
    const result:AxiosResponse<ResBodyListBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/getPublishListByWorkflowCode',
      method: 'get',
      params: { loadSheetSysProperty, workflowCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取已发布的数据项列表
   * @param schemaCode - string - query - 模型编码 - 必填
   * @param loadSheetSysProperty - boolean - query - 是否加载子表系统字段 - 可空
   */
   async getPublishList (schemaCode: string, loadSheetSysProperty?: boolean) {
    const result:AxiosResponse<ResBodyListBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/getPublishList',
      method: 'get',
      params: { loadSheetSysProperty, schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取数据项详情
   * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
   */
   async get (schemaPropertyCodeVo: SchemaPropertyCodeVo) {
    const result:AxiosResponse<ResBodyBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/get',
      method: 'post',
      data: schemaPropertyCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 创建数据项
   * @param bizPropertyVo - BizPropertyVo - body - bizPropertyVo - 必填
   */
   async create (bizPropertyVo: BizPropertyVo) {
    const result:AxiosResponse<ResBodyBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/create',
      method: 'post',
      data: bizPropertyVo,
    });
    return result;
  }
  
  
  
  /**
   * 确认删除数据项
   * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
   */
   async confirmRemove (schemaPropertyCodeVo: SchemaPropertyCodeVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/property/confirmRemove',
      method: 'post',
      data: schemaPropertyCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据流程编码批量获取已发布的数据项列表
   * @param workflowCodes - Array<string> - body - workflowCodes - 必填
   */
   async batchListPublishByWorkflowCodes (workflowCodes: Array<string>) {
    const result:AxiosResponse<ResBodyMapstringListBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/batchListPublishByWorkflowCodes',
      method: 'post',
      data: workflowCodes,
    });
    return result;
  }
  
  
  
  /**
   * 批量获取模型已发布的数据项列表
   * @param schemaCodes - Array<string> - body - schemaCodes - 必填
   */
   async batchListPublish (schemaCodes: Array<string>) {
    const result:AxiosResponse<ResBodyMapstringListBizPropertyVo> = await API.Global.request({
      url: '/admin/model/schema/property/batchListPublish',
      method: 'post',
      data: schemaCodes,
    });
    return result;
  }
  
  
}

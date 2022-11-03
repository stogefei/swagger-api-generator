/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizSchemaEventVo, ResBodystring, ResBodyVoid, ResBodyBizSchemaEventVo, ResBodyListBizSchemaEventVo,
} from '../model';

/**
 * biz-schema-event-controller
 */
export class BizSchemaEventController {
  
  /**
   * 修改事件
   * @param bizSchemaEventVo - BizSchemaEventVo - body - bizSchemaEventVo - 必填
   */
   async update (bizSchemaEventVo: BizSchemaEventVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/event/update',
      method: 'post',
      data: bizSchemaEventVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据模型编码获取事件列表
   * @param schemaCode - string - query - schemaCode - 必填
   */
   async queryBySchemaCode (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizSchemaEventVo> = await API.Global.request({
      url: '/admin/model/schema/event/queryBySchemaCode',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 查询所有事件列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListBizSchemaEventVo> = await API.Global.request({
      url: '/admin/model/schema/event/list',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 获取事件详情
   * @param id - string - query - id - 必填
   */
   async get (id: string) {
    const result:AxiosResponse<ResBodyBizSchemaEventVo> = await API.Global.request({
      url: '/admin/model/schema/event/get',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 删除事件
   * @param id - string - query - id - 必填
   */
   async delete (id: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/event/delete',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 新增事件
   * @param bizSchemaEventVo - BizSchemaEventVo - body - bizSchemaEventVo - 必填
   */
   async create (bizSchemaEventVo: BizSchemaEventVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/admin/model/schema/event/create',
      method: 'post',
      data: bizSchemaEventVo,
    });
    return result;
  }
  
  
}

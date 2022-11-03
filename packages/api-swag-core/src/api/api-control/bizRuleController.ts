/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    IdNameVo, ResBodyBizRuleVo, BizRuleVo, ResBodystring, IDVo, ResBodyVoid, ResBodyListBizRuleVo, ResBodyBizRulePropertyVo, ResBodyListBizRulePropertyVo, BizRuleRenameVo,
} from '../model';

/**
 * biz-rule-controller
 */
export class BizRuleController {
  
  /**
   * 修改规则
   * @param bizRuleVo - BizRuleVo - body - bizRuleVo - 必填
   */
   async update (bizRuleVo: BizRuleVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/biz/rule/update',
      method: 'post',
      data: bizRuleVo,
    });
    return result;
  }
  
  
  
  /**
   * 规则重命名
   * @param renameVo - BizRuleRenameVo - body - renameVo - 必填
   */
   async rename (renameVo: BizRuleRenameVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/biz/rule/rename',
      method: 'post',
      data: renameVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据模型编码获取规则列表
   * @param schemaCode - string - query - schemaCode - 必填
   */
   async queryBySchemaCode (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizRuleVo> = await API.Global.request({
      url: '/admin/model/biz/rule/queryBySchemaCode',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 批量获取规则属性
   * @param ids - Array<string> - body - ids - 必填
   */
   async list_1 (ids: Array<string>) {
    const result:AxiosResponse<ResBodyListBizRulePropertyVo> = await API.Global.request({
      url: '/admin/model/biz/rule/property/list',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 查询所有规则列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListBizRuleVo> = await API.Global.request({
      url: '/admin/model/biz/rule/list',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 获取规则属性
   * @param id - string - query - id - 必填
   */
   async get_1 (id: string) {
    const result:AxiosResponse<ResBodyBizRulePropertyVo> = await API.Global.request({
      url: '/admin/model/biz/rule/property/get',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 获取规则详情
   * @param id - string - query - id - 必填
   */
   async get (id: string) {
    const result:AxiosResponse<ResBodyBizRuleVo> = await API.Global.request({
      url: '/admin/model/biz/rule/get',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 删除规则
   * @param idVo - IDVo - body - idVo - 必填
   */
   async delete (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/biz/rule/delete',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 新增规则
   * @param bizRuleVo - BizRuleVo - body - bizRuleVo - 必填
   */
   async create (bizRuleVo: BizRuleVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/admin/model/biz/rule/create',
      method: 'post',
      data: bizRuleVo,
    });
    return result;
  }
  
  
  
  /**
   * 克隆业务规则
   * @param idNameVo - IdNameVo - body - idNameVo - 必填
   */
   async clone (idNameVo: IdNameVo) {
    const result:AxiosResponse<ResBodyBizRuleVo> = await API.Global.request({
      url: '/admin/model/biz/rule/clone',
      method: 'post',
      data: idNameVo,
    });
    return result;
  }
  
  
}
